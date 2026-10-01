import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No generar AGENTS.md / CLAUDE.md (instrucciones para asistentes de IA) en el repo.
  agentRules: false,
};

export default nextConfig;
