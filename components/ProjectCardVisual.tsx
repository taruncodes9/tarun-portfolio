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
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          {/* Glowing Radial Graphic */}
          <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-red-600/10 blur-2xl pointer-events-none" />
          <div className="absolute right-4 top-4 h-24 w-24 rounded-full border border-red-500/30 flex items-center justify-center animate-pulse">
            <div className="h-16 w-16 rounded-full border border-dashed border-red-400/50 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-red-600/30 flex items-center justify-center text-xs font-mono text-red-300 font-bold">
                HUD
              </div>
            </div>
            {/* Radial wedge indicators */}
            <span className="absolute top-1 text-[9px] font-mono text-red-400 font-semibold">PNG</span>
            <span className="absolute bottom-1 text-[9px] font-mono text-red-400 font-semibold">PDF</span>
            <span className="absolute left-1 text-[9px] font-mono text-red-400 font-semibold">WEBP</span>
            <span className="absolute right-1 text-[9px] font-mono text-red-400 font-semibold">DOCX</span>
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded bg-red-600/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-400 border border-red-600/30">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
              Windows Utility
            </span>
          </div>

          <div className="relative z-10">
            <div className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
              <span>WheelConvert</span>
              <span className="text-xs font-mono font-normal text-red-400">v1.0</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
              Radial Pie HUD • Zero-Focus Loss • C# / .NET 8
            </p>
          </div>
        </div>
      );

    case "multi-restaurant-mobile-app":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-emerald-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="absolute -right-6 -bottom-6 h-36 w-36 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
              Mobile & Multi-Tenant
            </span>
            <span className="text-[11px] font-mono text-emerald-300">React Native</span>
          </div>

          {/* Miniature App Screen Simulation */}
          <div className="my-auto self-center w-40 rounded-lg bg-zinc-950/80 border border-emerald-500/20 p-2 shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-1 mb-1.5">
              <div className="h-1.5 w-8 rounded-full bg-emerald-500/60" />
              <div className="h-1.5 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-1">
              <div className="h-2 w-full rounded bg-zinc-800 flex items-center px-1">
                <div className="h-1 w-12 rounded bg-emerald-400/80" />
              </div>
              <div className="h-2 w-4/5 rounded bg-zinc-800" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Multi-Restaurant Platform</div>
            <p className="text-xs text-zinc-400">Central WordPress Hub + Independent Satellites</p>
          </div>
        </div>
      );

    case "multi-restaurant-api-architecture":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-blue-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="absolute right-0 top-0 h-32 w-32 bg-blue-500/10 blur-xl pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-blue-500/30">
              REST Architecture
            </span>
            <span className="text-[11px] font-mono text-blue-400">&lt;200ms API</span>
          </div>

          {/* Miniature API Code / Node Graphic */}
          <div className="my-auto rounded bg-black/80 border border-blue-500/20 p-2.5 font-mono text-[10px] text-zinc-300 space-y-1">
            <div className="text-blue-400">GET /api/v1/restaurants/discovery</div>
            <div className="text-zinc-500">{`{ "status": 200, "nodes_synced": 18 }`}</div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Multi-Restaurant API</div>
            <p className="text-xs text-zinc-400">Inter-Server Sync • Guest & Auth Carts</p>
          </div>
        </div>
      );

    case "custom-api-integrations":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-purple-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-400 border border-purple-500/30">
              Gateways & Webhooks
            </span>
            <span className="text-[11px] font-mono text-purple-300">Twilio • Brevo</span>
          </div>

          {/* Webhook Pipe Graphic */}
          <div className="my-auto flex items-center justify-center gap-2">
            <div className="rounded-md border border-purple-500/40 bg-purple-950/40 px-2.5 py-1 text-[11px] font-mono text-purple-300 font-bold">
              SMS OTP
            </div>
            <div className="h-px w-6 bg-purple-500/50" />
            <div className="rounded-md border border-pink-500/40 bg-pink-950/40 px-2.5 py-1 text-[11px] font-mono text-pink-300 font-bold">
              SMTP
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Custom API Integrations</div>
            <p className="text-xs text-zinc-400">Twilio OTP • Brevo Queues • Webhook Listeners</p>
          </div>
        </div>
      );

    case "wordpress-woocommerce-solutions":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/30">
              WooCommerce Engine
            </span>
            <span className="text-[11px] font-mono text-cyan-300">Custom Plugins</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
              WP
            </div>
            <div className="h-10 w-10 rounded-lg bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
              WOO
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">WordPress & WooCommerce</div>
            <p className="text-xs text-zinc-400">Custom Cart Rules • Dynamic Pricing • DB Indexes</p>
          </div>
        </div>
      );

    case "buswala":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-amber-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
              Travel Booking
            </span>
            <span className="text-[11px] font-mono text-amber-300">Next.js + Mongo</span>
          </div>

          {/* Route path graphic */}
          <div className="my-auto flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" />
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-yellow-300" />
            <div className="h-2 w-2 rounded-full bg-yellow-300 ring-4 ring-yellow-300/20" />
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Buswala Booking</div>
            <p className="text-xs text-zinc-400">Route Discovery • Operator Inquiries • Travel Leads</p>
          </div>
        </div>
      );

    case "developer-portfolio":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-red-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-red-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
              NETFLIX UI
            </span>
            <span className="text-[11px] font-mono text-red-400">GSAP • Next.js 15</span>
          </div>

          <div className="my-auto text-center font-black tracking-widest text-xl text-red-600">
            TARUN CHHABRA
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Developer Portfolio</div>
            <p className="text-xs text-zinc-400">Streaming Theme • Project Modals • CI/CD Export</p>
          </div>
        </div>
      );

    case "client-crm-lead-management":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-sky-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-400 border border-sky-500/30">
              Enterprise CRM
            </span>
            <span className="text-[11px] font-mono text-sky-300">Sales Pipeline</span>
          </div>

          {/* Kanban simulation */}
          <div className="my-auto grid grid-cols-3 gap-1.5 px-2">
            <div className="h-10 rounded bg-zinc-900/90 border border-zinc-700/50 p-1">
              <div className="h-1.5 w-6 rounded bg-sky-400" />
            </div>
            <div className="h-10 rounded bg-zinc-900/90 border border-zinc-700/50 p-1">
              <div className="h-1.5 w-6 rounded bg-emerald-400" />
            </div>
            <div className="h-10 rounded bg-zinc-900/90 border border-zinc-700/50 p-1">
              <div className="h-1.5 w-6 rounded bg-purple-400" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Client CRM & Lead System</div>
            <p className="text-xs text-zinc-400">Kanban Funnels • Follow-ups • Analytics</p>
          </div>
        </div>
      );

    case "laravel-admin-api-platform":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-rose-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-rose-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-rose-500/30">
              Laravel RBAC
            </span>
            <span className="text-[11px] font-mono text-rose-300">Sanctum Auth</span>
          </div>

          <div className="my-auto rounded bg-black/70 border border-rose-500/30 p-2 font-mono text-[10px] text-rose-300">
            <div>$ php artisan migrate:status</div>
            <div className="text-emerald-400">✓ Users &amp; Permissions OK</div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Laravel Admin &amp; API</div>
            <p className="text-xs text-zinc-400">Role-Based Access • Eloquent ORM • Queues</p>
          </div>
        </div>
      );

    case "ecommerce-management-platform":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-violet-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-violet-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-400 border border-violet-500/30">
              E-Commerce Store
            </span>
            <span className="text-[11px] font-mono text-violet-300">Cart &amp; Admin</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-2">
            <div className="h-9 w-9 rounded-md bg-violet-900/40 border border-violet-500/30 flex items-center justify-center text-xs font-mono text-violet-200">
              SKU
            </div>
            <div className="h-9 w-9 rounded-md bg-violet-900/40 border border-violet-500/30 flex items-center justify-center text-xs font-mono text-violet-200">
              CART
            </div>
            <div className="h-9 w-9 rounded-md bg-violet-900/40 border border-violet-500/30 flex items-center justify-center text-xs font-mono text-violet-200">
              PAY
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">E-Commerce Management</div>
            <p className="text-xs text-zinc-400">Full Catalog • JWT Auth • Orders Dashboard</p>
          </div>
        </div>
      );

    case "real-time-order-tracking":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-orange-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-400 border border-orange-500/30">
              Live Dispatch
            </span>
            <span className="text-[11px] font-mono text-orange-300">State Machine</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-1.5 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-orange-300">Kitchen Prep ➔ Dispatch</span>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">Real-Time Order Tracking</div>
            <p className="text-xs text-zinc-400">Live Status Stepper • Admin Board • Rest APIs</p>
          </div>
        </div>
      );

    case "wordpress-headless-cms":
      return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-teal-950 via-zinc-900 to-black p-4 flex flex-col justify-between select-none">
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-400 border border-teal-500/30">
              Headless CMS
            </span>
            <span className="text-[11px] font-mono text-teal-300">WP + Next.js</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-3">
            <div className="text-xs font-mono font-bold text-zinc-300">WP Backend</div>
            <div className="text-teal-400 font-bold">➔ REST ➔</div>
            <div className="text-xs font-mono font-bold text-white">Next.js SSG</div>
          </div>

          <div className="relative z-10">
            <div className="text-base font-bold text-white">WordPress Headless CMS</div>
            <p className="text-xs text-zinc-400">Decoupled Architecture • Fast SSG • Custom REST</p>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative h-full w-full bg-gradient-to-br from-zinc-900 to-black p-4 flex flex-col justify-between">
          <span className="text-xs font-mono text-red-500 font-bold uppercase">{project.badge || "Featured"}</span>
          <div className="text-base font-bold text-white">{project.title}</div>
        </div>
      );
  }
}

