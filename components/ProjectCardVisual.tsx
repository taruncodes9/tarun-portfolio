import React from "react";
import type { Project } from "@/data/content";

interface Props {
  project: Project;
}

export default function ProjectCardVisual({ project }: Props) {
  const { id } = project;

  switch (id) {
    case "wheelconvert":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-zinc-900 to-black p-4 flex flex-col items-center justify-center select-none">
          <div className="absolute h-40 w-40 rounded-full bg-red-600/15 blur-2xl pointer-events-none" />
          <div className="relative h-28 w-28 rounded-full border border-red-500/30 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full border border-dashed border-red-400/50 flex items-center justify-center animate-spin" style={{ animationDuration: "25s" }}>
              <div className="h-10 w-10 rounded-full bg-red-600/30 flex items-center justify-center text-[10px] font-mono text-red-300 font-bold">
                HUD
              </div>
            </div>
            <span className="absolute top-1 text-[9px] font-mono text-red-400 font-bold">PNG</span>
            <span className="absolute bottom-1 text-[9px] font-mono text-red-400 font-bold">PDF</span>
            <span className="absolute left-1.5 text-[9px] font-mono text-red-400 font-bold">WEBP</span>
            <span className="absolute right-1.5 text-[9px] font-mono text-red-400 font-bold">DOCX</span>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-zinc-500">.NET 8 / C#</div>
        </div>
      );

    case "scandine":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-amber-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="flex items-center gap-3">
            {/* QR Code graphic */}
            <div className="h-14 w-14 rounded-lg bg-white p-1.5 flex flex-col justify-between shadow-lg">
              <div className="flex justify-between">
                <div className="h-4 w-4 bg-black rounded-sm" />
                <div className="h-4 w-4 bg-black rounded-sm" />
              </div>
              <div className="h-2 w-6 bg-black mx-auto rounded-xs" />
              <div className="flex justify-between">
                <div className="h-4 w-4 bg-black rounded-sm" />
                <div className="h-2 w-2 bg-black self-end rounded-xs" />
              </div>
            </div>
            <div className="space-y-1 font-mono text-[10px]">
              <div className="text-amber-400 font-bold">Table #04 Scanned</div>
              <div className="text-zinc-400">Menu Loaded ➔ Cart Active</div>
              <div className="text-emerald-400">PHPMailer Receipt Ready</div>
            </div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-amber-400/70">PHP + MySQL</div>
        </div>
      );

    case "multi-restaurant-mobile-app":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-emerald-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="absolute h-36 w-36 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
          <div className="w-36 rounded-lg bg-zinc-950/90 border border-emerald-500/30 p-2.5 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 mb-2">
              <div className="h-1.5 w-10 rounded-full bg-emerald-500/80" />
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2.5 w-full rounded bg-zinc-800 flex items-center px-1">
                <div className="h-1.5 w-14 rounded bg-emerald-400/80" />
              </div>
              <div className="h-2 w-3/4 rounded bg-zinc-850" />
              <div className="h-2 w-1/2 rounded bg-zinc-850" />
            </div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-emerald-400/70">React Native</div>
        </div>
      );

    case "multi-restaurant-api-architecture":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-blue-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="w-52 rounded-lg bg-black/90 border border-blue-500/30 p-3 font-mono text-[10px] shadow-xl">
            <div className="text-blue-400 font-bold flex items-center justify-between">
              <span>GET /restaurants/sync</span>
              <span className="text-emerald-400">200 OK</span>
            </div>
            <div className="text-zinc-500 mt-1">{`{ "nodes": 18, "latency": "142ms" }`}</div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-blue-400/70">REST Microservices</div>
        </div>
      );

    case "online-course-management":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="w-52 rounded-lg bg-black/90 border border-indigo-500/30 p-2.5 font-mono text-[10px] shadow-xl">
            <div className="text-indigo-300 font-bold">@RestController</div>
            <div className="text-zinc-400 mt-1">/api/courses/{`{id}`}/enroll</div>
            <div className="text-emerald-400 mt-1">Spring Data JPA • MySQL</div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-indigo-400/70">Java Spring Boot</div>
        </div>
      );

    case "hotel-management-system":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-rose-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="flex items-center gap-2.5">
            <div className="h-11 w-14 rounded-lg bg-zinc-900/90 border border-rose-500/40 p-1.5 flex flex-col justify-between">
              <div className="h-1.5 w-6 rounded bg-rose-400" />
              <div className="text-[9px] font-mono text-zinc-400">DELUXE</div>
            </div>
            <div className="h-11 w-14 rounded-lg bg-zinc-900/90 border border-emerald-500/40 p-1.5 flex flex-col justify-between">
              <div className="h-1.5 w-6 rounded bg-emerald-400" />
              <div className="text-[9px] font-mono text-emerald-400">BOOKED</div>
            </div>
            <div className="h-11 w-14 rounded-lg bg-zinc-900/90 border border-blue-500/40 p-1.5 flex flex-col justify-between">
              <div className="h-1.5 w-6 rounded bg-blue-400" />
              <div className="text-[9px] font-mono text-zinc-400">SUITE</div>
            </div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-rose-400/70">Hibernate / Spring</div>
        </div>
      );

    case "student-management-system":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-violet-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="w-48 rounded-lg bg-black/90 border border-violet-500/30 p-2.5 font-mono text-[10px] shadow-xl">
            <div className="text-violet-300 font-bold">Student Record #1048</div>
            <div className="text-zinc-400 mt-0.5">Semester: 4 • MCA / CS</div>
            <div className="text-emerald-400 mt-1">Postman Validated ✓</div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-violet-400/70">Spring MVC</div>
        </div>
      );

    case "custom-api-integrations":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-purple-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg border border-purple-500/40 bg-purple-950/60 px-3 py-1.5 text-xs font-mono text-purple-300 font-bold shadow-lg">
              Twilio SMS
            </div>
            <div className="h-px w-6 bg-purple-400/60" />
            <div className="rounded-lg border border-pink-500/40 bg-pink-950/60 px-3 py-1.5 text-xs font-mono text-pink-300 font-bold shadow-lg">
              Brevo SMTP
            </div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-purple-400/70">Webhooks</div>
        </div>
      );

    case "wordpress-woocommerce-solutions":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-cyan-900/40 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-base shadow-lg">
              WP
            </div>
            <div className="h-12 w-12 rounded-xl bg-indigo-900/40 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold text-base shadow-lg">
              WOO
            </div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-cyan-400/70">Custom Plugins</div>
        </div>
      );

    case "client-crm-lead-management":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-sky-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="grid grid-cols-3 gap-2 w-48">
            <div className="h-12 rounded-lg bg-zinc-900/90 border border-sky-500/30 p-1.5 shadow">
              <div className="h-1.5 w-6 rounded bg-sky-400" />
              <div className="h-1 w-8 rounded bg-zinc-700 mt-1.5" />
            </div>
            <div className="h-12 rounded-lg bg-zinc-900/90 border border-emerald-500/30 p-1.5 shadow">
              <div className="h-1.5 w-6 rounded bg-emerald-400" />
              <div className="h-1 w-8 rounded bg-zinc-700 mt-1.5" />
            </div>
            <div className="h-12 rounded-lg bg-zinc-900/90 border border-purple-500/30 p-1.5 shadow">
              <div className="h-1.5 w-6 rounded bg-purple-400" />
              <div className="h-1 w-8 rounded bg-zinc-700 mt-1.5" />
            </div>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-sky-400/70">Kanban CRM</div>
        </div>
      );

    case "buswala":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-amber-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-amber-400 ring-4 ring-amber-400/20" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300" />
            <div className="h-3 w-3 rounded-full bg-yellow-300 ring-4 ring-yellow-300/20" />
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-amber-400/70">Route Engine</div>
        </div>
      );

    case "developer-portfolio":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-red-950/60 via-zinc-900 to-black p-4 flex items-center justify-center select-none">
          <div className="text-center font-black tracking-widest text-2xl text-red-600 drop-shadow-md">
            TARUN.DEV
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-red-400/70">Next.js 15</div>
        </div>
      );

    default:
      return (
        <div className="relative h-full w-full bg-gradient-to-br from-zinc-900 to-black p-4 flex items-center justify-center">
          <span className="text-sm font-bold text-white">{project.title}</span>
        </div>
      );
  }
}
