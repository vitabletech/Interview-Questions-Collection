### 🏢 **Infopercept Consulting Pvt. Ltd. **
🛠️ **Role:** Backend AI Developer Interview
📍 **Location:** Ahmadabad, India (Remote)
💡 **Skills Required**: Prompt Engineering, Artificial Intelligence, Agentic AI, Backend, Programming 
👤 **Recruiter name:**  Vidhi Raval

## What This Interview *Is*
- A **problem-solving evaluation** using a technical challenge
- A test of your ability to work in an **unfamiliar environment**
- A chance to see how well you **utilize LLMs as partners**, not just autocomplete tools
- An opportunity to demonstrate **clarity of thought**, adaptability, and ownership

---

## What This Interview *Is Not*
- It’s not a test of Rust, Python, or any specific language knowledge (unless stated)
- It’s not about memorization, trick questions, or syntax trivia
- It’s not about getting everything right—it’s about **how you handle what goes wrong**

---

## Tools You Can Use
- You may use **ChatGPT, GitHub Copilot, or any LLM of your choice**
- You may use **Docker, online IDEs (e.g., Replit, Gitpod, Codespaces)** to bypass local setup issues
- You may search for documentation, examples, or tutorials—**but you must understand what you're applying**

---

## What We'll Be Looking For
- **Prompting strategy** – Are you asking the LLM smart questions? Are you iterating?
- **Problem-solving mindset** – Can you break down a problem and build incrementally?
- **Ownership** – Do you know when to adapt, ask, or pivot?
- **Communication** – Can you explain what you’re doing and why?
- **Recovery** – How do you handle friction, errors, or failure?

---

## Recommendations Before the Interview
- Make sure your **development environment is ready** (or be ready to use Docker or a cloud IDE)
- Ensure you have **access to your preferred LLM assistant** (e.g., ChatGPT Plus, local model, etc.)
- Be prepared to **ask clarifying questions** or challenge assumptions if needed
- If you're unfamiliar with a language or stack, focus on **thinking clearly and prompting effectively**

---

## During the Interview
- You are encouraged to **talk through your thought process**
- If you hit a wall, say so. **Don’t spin—reflect.**
- If you make a design choice, explain your reasoning
- If you're using an LLM, share a few of your prompts. This helps us understand your approach


- **Round 1** – Machine Coding only 1round (Virtual Video Call) 2 hr 
👤 **Interviewer:** Nehal Dattani

Here is the task
## 0 · Premise

A global logistics operator runs **5000** long‑haul trucks.  
Every vehicle emits a compact **telemetry frame every five minutes** (± jitter) while en‑route:

```jsonc
{
  "truck_id": "T0001",
  "trip_id": "TR0001",
  "ts_utc": "2025‑05‑30T04:15:00Z",
  "lat": 37.7749,
  "lon": -122.4194,
  "speed_kph": 76.4,
  "heading_deg": 90.0,
  "fuel_pct": 64,
  "cargo_temp_c": 5.2
}
```

Your assignment is to **simulate the fleet, ingest the fire‑hose, enrich each frame with weather, and predict ETA** — all on a developer laptop.  
Lean on ChatGPT / Claude / etc. as much as you wish _during_ the session, but the resulting repo must:  

* compile and run offline;  
* keep infra strictly local (Docker, k3d, SQLite/PostgreSQL inside containers).

---

## 1 · Repo Layout

```
supply_chain_eta_oracle/
├── Cargo.toml
├── .env.example
├── docker-compose.yaml
├── Makefile               # tiny helper targets
├── src/
│   ├── main.rs            # dispatch — do not edit
│   └── bin/
│       ├── simulator.rs   # TODO  ← section 2‑A
│       └── server.rs      # TODO  ← section 2‑A/B/C
├── data/
│   ├── trucks.csv         # 5 000 numbered plates (sample = 50)
│   ├── trips.csv          # scheduled trips, ISO‑8601 start, planned duration
│   └── weather_stub.json  # hourly WX snapshots for three corridors
└── docs/
    └── architecture.mmd   # PlantUML / Mermaid diagram placeholder
```

---

## 2 · Task Matrix

The exercise is intentionally **layered**.  
Finish rows **A** and **B** first — go ahead _only_ after they work end‑to‑end.

| ID | Category | Acceptance criteria |
|----|-----------|--------------------|
| **A‑1** | **Basic — Simulator** | Binary `simulator` opens _N_ WebSockets ( default **5000**) to `ENDPOINT`.<br/>*CLI flags* **--endpoint**, **--clients**, **--replay‑speed** (1 = real time), **--jitter-ms**.<br/>Replays `data/trips.csv`, computing lat/lon per tick with great‑circle interpolation.<br/>Reconnects with exponential back‑off (2 → 30 s).<br/>Throughput ≥ 1 000 msg/s in `--replay‑speed 600` mode on a 4‑core Intel laptop. |
| **A‑2** | **Basic — Ingestion microservice** | Binary `server` exposes **/ingest** (WebSocket).<br/>Validates & ACKs each frame.<br/>Persists raw JSON into **SQLite** (`telemetry_raw` table).<br/>Graceful shutdown (ctrl‑C) flushes outstanding writes. |
| **B‑1** | **Prod — Containerisation & scaling** | Provide `Dockerfile` for **simulator** _and_ **server**; both build in < 5 min on M1.<br/>`docker-compose up --scale simulator=5` spins up 5 × 1 000‑client sims plus one server and local **PostgreSQL 16**.<br/>Env vars `CLIENTS_PER_SIM`, `SERVER_WORKERS` control scale. |
| **B‑2** | **Prod — Durable persistence** | Switch to PostgreSQL; write SQL x migrations.<br/>Schema: `trucks`, `trips`, `telemetry`, `weather`, `eta_predictions`.<br/>Primary keys & sensible indices (ts, truck). |
| **B‑3** | **Prod — Weather enrichment** | Implement `WeatherProvider` trait.<br/>Default impl hits **Open‑Meteo** _(live)_ **or** reads `weather_stub.json` when `OFFLINE_MODE=1`.<br/>Enriched columns: `wx_temp_c`, `wx_wind_mps`, `wx_precip_mm`. |
| **C‑1** | **Advanced (choose 3)** — ML ETA model | Offline notebook / script trains gradient‑boost model (_xgboost‑rs_ / Python‑onnx).<br/>Load ONNX in `server`; endpoint `/eta/:trip_id` returns ETA + Δ vs schedule.<br/>Score ≤ 5 % MAPE on `sample_eval.csv`. |
| **C‑2** | Back‑pressure & jitter control | Bounded channel; drop‑oldest with metric `telemetry_dropped_total`; adaptive sleep to smooth spikes. |
| **C‑3** | Observability | `/metrics` in Prometheus exposition format; include ingestion QPS, DB latency histogram.<br/>Bundled Grafana dashboard JSON. |
| **C‑4** | Graceful degradation | Persist to **sled** queue when DB offline; background flusher on recovery. |
| **C‑5** | Load test | Provide **k6** or Rust‑based script hitting 30 min, 5 000 VRs; output HTML report. |
| **C‑6** | Kubernetes | k3d cluster + Helm chart or Kustomize; HPA on CPU & custom `ingest_qps`. |
| **C‑7** | Secure transport | Mutual TLS with self‑signed CA; bearer token auth on top; rotate secrets every start. |

> **Pick exactly three** items from C and declare them in **README\#Chosen‑Advanced‑Items** before coding.

---

## 3 · What We Evaluate

| Axis | Weight |
|------|--------|
| Correctness & determinism | 35 % |
| Throughput vs resource use | 20 % |
| Code quality & idiomatic Rust | 20 % |
| Architecture & trade‑off reasoning | 15 % |
| Documentation (README, diagrams, tests) | 10 % |

Hard limits:

* CPU ≤ 4 cores, RAM ≤ 16 GB, run time of evaluation ≤ 15 min.

---

## 4 · Quick start

```bash
# ❶ bootstrap tool‑chain
rustup default stable

# ❷ run stubs (they just print 'implement me')
cargo run --bin server
cargo run --bin simulator

# ❸ spin containers (after you implement B‑1)
make compose-up      # shorthand for docker‑compose up ‑d

# ❹ run load test (if you attempt C‑5)
make loadtest
```

Detailed steps live in **HOW_TO_RUN.md**.

---

## 5 · Deliverables

1. **All your** prompts and their output
2. **Git repo** (push to GitHub / GitLab) + commit history.  
3. `supply_chain_eta_oracle.zip` with `target/release` binaries for air‑gapped review.  
4. One‑page architecture diagram (Mermaid / PlantUML) in `docs/architecture.mmd`.  
5. Short screencast (≤ 3 min, optional) demoing the stack at 10 000 msg/s.

---

## 6 · Submission & Time‑box

*You have 2-3 consecutive hours once the timer starts.*  
Treat it like prod‑outage triage: ship an MVP first, then harden / polish.

_That’s it — happy hacking!_
