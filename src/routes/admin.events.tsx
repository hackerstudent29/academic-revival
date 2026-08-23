import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit3, Image as ImageIcon } from 'lucide-react';

export const Route = createFileRoute('/admin/events')({
  component: EventsManager,
});

function EventsManager() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', image_url: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    setLoading(true);
    const { data, error } = await supabase.from('events').select('*').order('date', { ascending: false });
    if (!error && data) {
      setEvents(data);
    }
    setLoading(false);
  }

  async function handleAddEvent(e: React.FormEvent) {
    e.preventDefault();
    const { data, error } = await supabase.from('events').insert([
      { ...newEvent, is_published: true, date: new Date(newEvent.date).toISOString() }
    ]);
    if (!error) {
      setIsAdding(false);
      setNewEvent({ title: '', description: '', date: '', image_url: '' });
      fetchEvents();
    } else {
      alert("Error adding event: " + error.message);
    }
  }

  async function deleteEvent(id: string) {
    if (confirm("Are you sure you want to delete this event?")) {
      await supabase.from('events').delete().eq('id', id);
      fetchEvents();
    }
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events Management</h1>
          <p className="text-gray-600 mt-1">Add, update, or remove college events and announcements.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          <span>Add New Event</span>
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Create New Event</h2>
          <form onSubmit={handleAddEvent} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Event Title</label>
              <input required type="text" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. Annual Tech Symposium" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Event Date & Time</label>
              <input required type="datetime-local" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea required rows={4} value={newEvent.description} onChange={e => setNewEvent({...newEvent, description: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Describe the event..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <ImageIcon size={18} />
                </span>
                <input type="url" value={newEvent.image_url} onChange={e => setNewEvent({...newEvent, image_url: e.target.value})} className="flex-1 block w-full min-w-0 rounded-none rounded-r-md border border-gray-300 p-2" placeholder="https://..." />
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Save Event</button>
              <button type="button" onClick={() => setIsAdding(false)} className="bg-gray-100 text-gray-800 px-4 py-2 rounded border hover:bg-gray-200">Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center text-gray-500">Loading events...</td></tr>
            ) : events.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center text-gray-500">No events found. Create one!</td></tr>
            ) : (
              events.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {event.image_url ? (
                          <img className="h-10 w-10 rounded-md object-cover" src={event.image_url} alt="" />
                        ) : (
                          <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                            <ImageIcon className="text-gray-400" size={20} />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{event.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4"><Edit3 size={18} /></button>
                    <button onClick={() => deleteEvent(event.id)} className="text-red-600 hover:text-red-900"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
