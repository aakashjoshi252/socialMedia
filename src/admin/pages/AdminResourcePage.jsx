/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaDownload, FaEdit, FaPlus, FaSearch, FaSort, FaTrash } from 'react-icons/fa';
import { adminApi } from '../../api/adminApi';
import { resourceConfig } from '../adminConfig';

const defaultFormValue = (field) => {
  if (field.type === 'checkbox') return false;
  if (field.type === 'number') return '';
  return '';
};

const formatValue = (value) => {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  if (!value) return '-';
  if (String(value).match(/^\d{4}-\d{2}-\d{2}T/)) return new Date(value).toLocaleDateString();
  return String(value);
};

const StatusBadge = ({ value }) => {
  const text = formatValue(value);
  const tone =
    text.includes('completed') || text.includes('Paid') || text.includes('approved') || text === 'Yes'
      ? 'bg-emerald-100 text-emerald-700'
      : text.includes('cancelled') || text.includes('rejected') || text.includes('refunded') || text === 'No'
        ? 'bg-red-100 text-red-700'
        : 'bg-amber-100 text-amber-700';

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{text}</span>;
};

const AdminResourcePage = () => {
  const { resource = 'bookings' } = useParams();
  const config = resourceConfig[resource] || resourceConfig.bookings;
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ page: 1, pages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [filters, setFilters] = useState({ search: '', status: '', serviceId: '', page: 1, sortBy: 'createdAt', sortOrder: 'desc' });
  const [formData, setFormData] = useState({});

  const initialForm = useMemo(() => {
    return Object.fromEntries(config.fields.map((field) => [field.name, defaultFormValue(field)]));
  }, [config.fields]);

  const loadItems = useCallback(async () => {
    try {
      const { data } = await adminApi.list(resource, filters);
      setItems(data.items || []);
      setMeta({ page: data.page, pages: data.pages, total: data.total });
    } catch (error) {
      toast.error(error.response?.data?.message || `Could not load ${resource}`);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [filters, resource]);

  useEffect(() => {
    void loadItems();
  }, [loadItems]);

  const openCreate = () => {
    setEditingItem(null);
    setFormData(initialForm);
    setModalOpen(true);
  };

  const openEdit = (item) => {
    setEditingItem(item);
    setFormData({ ...initialForm, ...item });
    setModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingItem?._id) {
        await adminApi.update(resource, editingItem._id, formData);
        toast.success('Record updated');
      } else {
        await adminApi.create(resource, formData);
        toast.success('Record created');
      }
      setModalOpen(false);
      loadItems();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Save failed');
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm('Delete this record? This action cannot be undone.')) return;
    try {
      await adminApi.remove(resource, item._id);
      toast.success('Record deleted');
      loadItems();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Delete failed');
    }
  };

  const handleExport = async () => {
    try {
      const { data } = await adminApi.exportCsv(resource, filters);
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resource}.csv`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch {
      toast.error('Export failed');
    }
  };

  const toggleSort = (column) => {
    setFilters({
      ...filters,
      sortBy: column,
      sortOrder: filters.sortBy === column && filters.sortOrder === 'desc' ? 'asc' : 'desc',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-royal-gold">Admin Module</p>
          <h2 className="text-4xl font-cormorant text-royal-maroon">{config.title}</h2>
          <p className="mt-2 max-w-3xl text-slate-600">{config.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={handleExport} className="rounded-full border border-slate-300 bg-white px-5 py-2 font-semibold text-slate-700 hover:border-royal-gold">
            <span className="inline-flex items-center gap-2"><FaDownload /> CSV</span>
          </button>
          <button onClick={openCreate} className="gold-button inline-flex items-center gap-2">
            <FaPlus /> Add New
          </button>
        </div>
      </div>

      <section className="rounded-lg bg-white p-5 shadow-lg">
        <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px_auto]">
          <label className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={filters.search}
              onChange={(event) => setFilters({ ...filters, search: event.target.value })}
              onKeyDown={(event) => event.key === 'Enter' && loadItems()}
              className="focus-ring w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4"
              placeholder={`Search ${config.title.toLowerCase()}...`}
            />
          </label>
          <input
            value={filters.status}
            onChange={(event) => setFilters({ ...filters, status: event.target.value, page: 1 })}
            className="focus-ring rounded-lg border border-slate-300 px-4 py-3"
            placeholder="Status"
          />
          <input
            value={filters.serviceId}
            onChange={(event) => setFilters({ ...filters, serviceId: event.target.value, page: 1 })}
            className="focus-ring rounded-lg border border-slate-300 px-4 py-3"
            placeholder="Service"
          />
          <button onClick={loadItems} className="rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-royal-maroon">
            Apply
          </button>
        </div>
      </section>

      <section className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                {config.columns.map((column) => (
                  <th key={column} className="whitespace-nowrap px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    <button onClick={() => toggleSort(column)} className="inline-flex items-center gap-2">
                      {column.replace(/([A-Z])/g, ' $1')} <FaSort />
                    </button>
                  </th>
                ))}
                <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan={config.columns.length + 1} className="px-5 py-16 text-center text-slate-500">Loading records...</td></tr>
              ) : items.length === 0 ? (
                <tr><td colSpan={config.columns.length + 1} className="px-5 py-16 text-center text-slate-500">No records found.</td></tr>
              ) : items.map((item) => (
                <tr key={item._id} className="hover:bg-slate-50">
                  {config.columns.map((column) => (
                    <td key={column} className="max-w-xs whitespace-nowrap px-5 py-4 text-sm text-slate-700">
                      {column === config.statusField || column.toLowerCase().includes('status') || typeof item[column] === 'boolean'
                        ? <StatusBadge value={item[column]} />
                        : formatValue(item[column])}
                    </td>
                  ))}
                  <td className="px-5 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEdit(item)} className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:bg-royal-gold/20" title="Edit">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(item)} className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100" title="Delete">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 px-5 py-4 text-sm text-slate-500">
          <span>{meta.total} records</span>
          <div className="flex gap-2">
            <button disabled={meta.page <= 1} onClick={() => setFilters({ ...filters, page: meta.page - 1 })} className="rounded-lg border px-3 py-1 disabled:opacity-40">Prev</button>
            <span className="px-2 py-1">Page {meta.page} of {meta.pages}</span>
            <button disabled={meta.page >= meta.pages} onClick={() => setFilters({ ...filters, page: meta.page + 1 })} className="rounded-lg border px-3 py-1 disabled:opacity-40">Next</button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <form onSubmit={handleSubmit} className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-royal-gold">{editingItem ? 'Edit Record' : 'Create Record'}</p>
                <h3 className="text-3xl font-cormorant text-royal-maroon">{config.title}</h3>
              </div>
              <button type="button" onClick={() => setModalOpen(false)} className="rounded-full bg-slate-100 px-4 py-2 font-semibold">Close</button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {config.fields.map((field) => (
                <label key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <span className="mb-2 block font-semibold text-slate-700">{field.label}</span>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name] || ''}
                      onChange={(event) => setFormData({ ...formData, [field.name]: event.target.value })}
                      required={field.required}
                      rows="5"
                      className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      value={formData[field.name] || ''}
                      onChange={(event) => setFormData({ ...formData, [field.name]: event.target.value })}
                      required={field.required}
                      className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <input
                      type="checkbox"
                      checked={Boolean(formData[field.name])}
                      onChange={(event) => setFormData({ ...formData, [field.name]: event.target.checked })}
                      className="h-5 w-5 accent-royal-gold"
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={field.type === 'date' && formData[field.name] ? String(formData[field.name]).slice(0, 10) : formData[field.name] || ''}
                      onChange={(event) => setFormData({ ...formData, [field.name]: event.target.value })}
                      required={field.required}
                      className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3"
                    />
                  )}
                </label>
              ))}
            </div>

            <button className="gold-button mt-7 w-full py-3">{editingItem ? 'Save Changes' : 'Create Record'}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminResourcePage;
