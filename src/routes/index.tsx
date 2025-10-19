import { createFileRoute, Link, redirect } from '@tanstack/react-router';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export const Route = createFileRoute('/')({
  component: Home,
  // loader: async () => {
  //   throw redirect({ to: "/docs/$", params: { _splat: "" } });
  // },
});

function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="max-w-7xl mx-auto p-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-fd-primary/10 text-fd-primary rounded-full text-sm font-medium mb-4">
            Headless Feedback Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Feedback that works <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              for developers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-3xl mx-auto">
            A headless, API-first feedback platform designed for modern development workflows. 
            Bring your own UI, keep control, ship faster.
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <a 
              href="https://tally.so/r/3xeovk" 
              target="_blank"
              className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </a>
            <Link
              to="/docs/$"
              params={{ _splat: '' }}
              className="px-6 py-3 border border-fd-border rounded-lg font-semibold hover:bg-fd-accent transition-colors"
            >
              View Docs
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Large Feature - Top Left */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-3">Headless Integration</h3>
              <p className="text-blue-50 text-sm">
              Vox is fully headless — it comes without styling or UI components, meaning you can plug it into any frontend framework and retain full control over how feedback is presented.
              </p>
            </div>
          </div>

          {/* Small Feature - Top Right */}
          <div className="bg-fd-card border border-fd-border rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Agentic / AI Ready</h3>
              <p className="text-fd-muted-foreground text-sm">
              The product is built with “agentic” workflows in mind — meaning your AI copilot or tooling can easily integrate and automate feedback collection, routing, or insights.
              </p>
            </div>
          </div>

          {/* Medium Feature - Middle Right */}
          <div className="lg:row-span-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-xl font-bold mb-2">Zero-Config Setup</h3>
              <p className="text-green-50 text-sm mb-4">
              You can get started with just an API key — no dashboard configuration or setup overhead. That means less friction, faster time to value.
              </p>
            </div>
          </div>

          {/* Small Feature */}
          <div className="bg-fd-card border border-fd-border rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Custom Metadata Support</h3>
              <p className="text-fd-muted-foreground text-sm">
              You have full control over what metadata you attach (e.g., app, email, environment) to each feedback event — enabling richer analytics and segmentation.
              </p>
            </div>
          </div>

          {/* Small Feature */}
          <div className="bg-fd-card border border-fd-border rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Full Ownership & Flexibility</h3>
              <p className="text-fd-muted-foreground text-sm">
              Because Vox gives you the “bring your own” authentication, layout and styling, you retain full ownership of how feedback is captured, stored and displayed—no lock-in.
              </p>
            </div>
          </div>

          {/* Wide Feature - Bottom */}
          <div className="lg:col-span-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-6 flex items-center justify-between text-white">
            <div>
              <h3 className="text-xl font-bold mb-2">Get Started</h3>
              <p className="text-orange-50 text-sm">
                Sign up to our waitlist and get early access to Vox. We'll be in touch very soon.
              </p>
            </div>
            <a href="https://tally.so/r/3xeovk" target="_blank" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">Sign up</a>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
