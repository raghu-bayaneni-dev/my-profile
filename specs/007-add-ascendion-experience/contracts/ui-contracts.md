# UI Contracts: Experience Timeline Item

**Feature**: Add Ascendion Experience & Update Salesforce Dates  
**Branch**: `007-add-ascendion-experience`  
**Date**: 2026-09-10  

## HTML Markup Contract (`experience.html`)

### Ascendion Milestone Markup (Top Item):
```html
<!-- Milestone 1: Ascendion -->
<article class="timeline-item">
  <div class="timeline-marker" aria-hidden="true"></div>
  <div class="timeline-content">
    <div class="timeline-header">
      <div>
        <h2 class="timeline-role">Lead AI &amp; Forward Deployment Engineer - Enterprise AI Systems</h2>
        <div class="timeline-company">Ascendion &bull; San Francisco Bay Area, CA</div>
      </div>
      <span class="timeline-date">Aug 2026 — Present</span>
    </div>
    <p>
      Serve as the primary technical partner and bridge between cutting-edge Agentic AI capabilities and enterprise execution, embedding directly with customer teams to design, deploy, and scale autonomous AI-powered workflows and agents that deliver measurable business outcomes.
    </p>
    <ul class="timeline-responsibilities">
      <li><strong>Customer Engagement &amp; Discovery:</strong> Partner directly with enterprise technology and business leaders to identify high-value Agentic AI opportunities, run discovery workshops, and translate complex business requirements into production-ready architectures.</li>
      <li><strong>Enterprise Agentic Architecture:</strong> Design production-grade Agentic AI architectures, orchestrating LLMs, multi-agent frameworks, advanced RAG, and knowledge systems capable of autonomous reasoning, planning, and task execution.</li>
      <li><strong>System Integration &amp; Microservices:</strong> Build and deploy highly performant AI agents, copilots, and multi-agent systems in client production environments, developing secure APIs and custom connectors to link AI workflows with enterprise CRM, ERP, and ITSM platforms.</li>
      <li><strong>Performance &amp; Cost Optimization:</strong> Configure vector databases, retrieval pipelines, and agent orchestration platforms while optimizing agentic runtimes for latency, reliability, and token routing cost-efficiency at enterprise scale.</li>
      <li><strong>Engineering Strategy &amp; Reusable Accelerators:</strong> Write high-quality production code in Python, Java, and JavaScript/TypeScript, developing reusable deployment patterns, templates, and CI/CD pipelines to streamline deployment cycles.</li>
      <li><strong>Enterprise Transformation &amp; Observability:</strong> Define success metrics, ROI KPIs, and safety guardrails (including compliance, observability, and monitoring) to ensure deterministic decision-making and scale successful pilots into enterprise-wide deployments.</li>
    </ul>
    <div class="tag-list">
      <span class="tag tag-accent">Agentic AI</span>
      <span class="tag tag-accent">Forward Deployed Systems</span>
      <span class="tag tag-accent">Multi-Agent Frameworks</span>
      <span class="tag tag-accent">Advanced RAG</span>
      <span class="tag tag-accent">Python</span>
      <span class="tag">TypeScript</span>
      <span class="tag">Java</span>
      <span class="tag">Vector DBs</span>
      <span class="tag">AI Observability</span>
    </div>
  </div>
</article>
```

### Salesforce Milestone Markup (Updated Date):
```html
<!-- Milestone 2: Salesforce -->
<article class="timeline-item">
  <div class="timeline-marker" aria-hidden="true"></div>
  <div class="timeline-content">
    <div class="timeline-header">
      <div>
        <h2 class="timeline-role">Lead Technical Staff Engineer - AI Systems &amp; Web Platforms</h2>
        <div class="timeline-company">Salesforce &bull; San Francisco, CA</div>
      </div>
      <span class="timeline-date">Jan 2012 — Apr 2026</span>
    </div>
    ...
```
