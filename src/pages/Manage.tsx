import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Network, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Meeting = { id: number; title: string; date: string; time: string };
type Contact = { id: number; name: string; role: string };

const Manage = ({ mode }: { mode: "meetings" | "network" }) => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const isMeetings = mode === "meetings";

  const addMeeting = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !date || !time) return;
    setMeetings((items) => [...items, { id: Date.now(), title: title.trim(), date, time }]);
    setTitle("");
    setDate("");
    setTime("");
  };

  const addContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;
    setContacts((items) => [...items, { id: Date.now(), name: name.trim(), role: role.trim() }]);
    setName("");
    setRole("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <Button asChild variant="ghost" className="mb-8 -ml-3 text-muted-foreground">
          <Link to="/"><ArrowLeft className="h-4 w-4" /> Back to Streams</Link>
        </Button>
        <div className="mb-8 flex items-center gap-3">
          {isMeetings ? <CalendarDays className="h-7 w-7 text-primary" /> : <Network className="h-7 w-7 text-primary" />}
          <h1 className="text-2xl font-bold sm:text-3xl">{isMeetings ? "Your Meetings" : "Your Network"}</h1>
        </div>

        {isMeetings ? (
          <>
            <form onSubmit={addMeeting} className="space-y-4 border-b border-border pb-8">
              <h2 className="text-lg font-semibold">Schedule a meeting</h2>
              <div className="space-y-2">
                <Label htmlFor="meeting-title">Meeting title</Label>
                <Input id="meeting-title" value={title} onChange={(event) => setTitle(event.target.value)} required maxLength={100} placeholder="Meeting title" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="meeting-date">Date</Label>
                  <Input id="meeting-date" type="date" min={new Date().toLocaleDateString("en-CA")} value={date} onChange={(event) => setDate(event.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meeting-time">Time</Label>
                  <Input id="meeting-time" type="time" value={time} onChange={(event) => setTime(event.target.value)} required />
                </div>
              </div>
              <Button type="submit"><Plus className="h-4 w-4" /> Add meeting</Button>
            </form>
            <section className="pt-8" aria-label="Scheduled meetings">
              <h2 className="mb-4 text-lg font-semibold">Scheduled meetings</h2>
              {meetings.length === 0 ? <p className="text-muted-foreground">No meetings scheduled yet.</p> : (
                <ul className="space-y-2">
                  {meetings.map((meeting) => (
                    <li key={meeting.id} className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-4">
                      <div className="min-w-0"><p className="break-words font-medium">{meeting.title}</p><p className="text-sm text-muted-foreground">{meeting.date} · {meeting.time}</p></div>
                      <Button variant="ghost" size="icon" aria-label={`Remove ${meeting.title}`} title="Remove meeting" onClick={() => setMeetings((items) => items.filter((item) => item.id !== meeting.id))}><Trash2 className="h-4 w-4" /></Button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        ) : (
          <>
            <form onSubmit={addContact} className="space-y-4 border-b border-border pb-8">
              <h2 className="text-lg font-semibold">Add a connection</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="contact-name">Name</Label><Input id="contact-name" value={name} onChange={(event) => setName(event.target.value)} required maxLength={100} placeholder="Name" /></div>
                <div className="space-y-2"><Label htmlFor="contact-role">Role</Label><Input id="contact-role" value={role} onChange={(event) => setRole(event.target.value)} maxLength={100} placeholder="Role or company" /></div>
              </div>
              <Button type="submit"><Plus className="h-4 w-4" /> Add connection</Button>
            </form>
            <section className="pt-8" aria-label="Connections">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold">Connections</h2>
                <Button asChild variant="outline" size="sm"><Link to="/search">Find people</Link></Button>
              </div>
              {contacts.length === 0 ? <p className="text-muted-foreground">No connections added yet.</p> : (
                <ul className="space-y-2">
                  {contacts.map((contact) => (
                    <li key={contact.id} className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-4">
                      <div className="min-w-0"><p className="break-words font-medium">{contact.name}</p>{contact.role && <p className="break-words text-sm text-muted-foreground">{contact.role}</p>}</div>
                      <Button variant="ghost" size="icon" aria-label={`Remove ${contact.name}`} title="Remove connection" onClick={() => setContacts((items) => items.filter((item) => item.id !== contact.id))}><Trash2 className="h-4 w-4" /></Button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Manage;