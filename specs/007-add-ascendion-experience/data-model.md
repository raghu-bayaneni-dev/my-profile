# Phase 1 Data Model: Experience Milestones

**Feature**: Add Ascendion Experience & Update Salesforce Dates  
**Branch**: `007-add-ascendion-experience`  
**Date**: 2026-09-10  

## Entity Schema

### Experience Milestone Entity

```text
ExperienceMilestone {
  id: string                      // e.g. "ascendion", "salesforce"
  company: string                 // "Ascendion"
  location: string                // "San Francisco Bay Area, CA"
  role_title: string              // "Lead AI & Forward Deployment Engineer - Enterprise AI Systems"
  date_range: string              // "Aug 2026 — Present"
  is_current: boolean             // true
  overview: string                // Executive summary paragraph
  responsibilities: Array<{       // List of key achievements & responsibilities
    lead_in: string               // Bold label (e.g., "Customer Engagement & Discovery")
    text: string                  // Descriptive body text
  }>
  tags: Array<{                   // Technology pills
    label: string                 // Tag name (e.g., "Agentic AI")
    is_accent: boolean            // true for primary highlighted skills
  }>
}
```

## Milestone Content Instances

### 1. Ascendion Milestone
- **Role**: `Lead AI & Forward Deployment Engineer - Enterprise AI Systems`
- **Company**: `Ascendion • San Francisco Bay Area, CA`
- **Date**: `Aug 2026 — Present`
- **Overview**: *Serve as the primary technical partner and bridge between cutting-edge Agentic AI capabilities and enterprise execution, embedding directly with customer teams to design, deploy, and scale autonomous AI-powered workflows and agents that deliver measurable business outcomes.*
- **Responsibilities**:
  1. **Customer Engagement & Discovery:** Partner directly with enterprise technology and business leaders to identify high-value Agentic AI opportunities, run discovery workshops, and translate complex business requirements into production-ready architectures.
  2. **Enterprise Agentic Architecture:** Design production-grade Agentic AI architectures, orchestrating LLMs, multi-agent frameworks, advanced RAG, and knowledge systems capable of autonomous reasoning, planning, and task execution.
  3. **System Integration & Microservices:** Build and deploy highly performant AI agents, copilots, and multi-agent systems in client production environments, developing secure APIs and custom connectors to link AI workflows with enterprise CRM, ERP, and ITSM platforms.
  4. **Performance & Cost Optimization:** Configure vector databases, retrieval pipelines, and agent orchestration platforms while optimizing agentic runtimes for latency, reliability, and token routing cost-efficiency at enterprise scale.
  5. **Engineering Strategy & Reusable Accelerators:** Write high-quality production code in Python, Java, and JavaScript/TypeScript, developing reusable deployment patterns, templates, and CI/CD pipelines to streamline deployment cycles.
  6. **Enterprise Transformation & Observability:** Define success metrics, ROI KPIs, and safety guardrails (including compliance, observability, and monitoring) to ensure deterministic decision-making and scale successful pilots into enterprise-wide deployments.
- **Tags**: `Agentic AI (accent)`, `Forward Deployed Systems (accent)`, `Multi-Agent Frameworks (accent)`, `Advanced RAG (accent)`, `Python (accent)`, `TypeScript`, `Java`, `Vector DBs`, `AI Observability`

### 2. Salesforce Milestone (Updated)
- **Role**: `Lead Technical Staff Engineer - AI Systems & Web Platforms`
- **Company**: `Salesforce • San Francisco, CA`
- **Date**: `Jan 2012 — Apr 2026`
