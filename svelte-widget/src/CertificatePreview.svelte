<svelte:options customElement="jp-certificate-preview" />

<script lang="ts">
  export let patient = "Choe Gu-sung";
  export let birth = "2070-10-29";
  export let sex = "male";
  export let address =
    "503, Hanasakigawa Heights, 27 Kasumi-ro, Byeolbit-gu, Seoul, Republic of Korea";
  export let doctor = "Ameku Takao, M.D.";
  export let hospital = "Tenkai General Hospital";
  export let level = "severe";
  export let score = "85";
  export let note =
    "Immediate attempts to book flights to Japan were observed when spring fare promotions appeared.";
  export let issued = "2026-04-19";
  export let serial = "AEJIS-550e8400-e29b-41d4-a716-446655440000";

  const labels: Record<string, string> = {
    mild: "MILD",
    moderate: "MODERATE",
    severe: "SEVERE",
    critical: "CRITICAL",
  };

  const sexLabels: Record<string, string> = {
    female: "Female",
    male: "Male",
    non_binary: "Non-binary",
    genderfluid: "Genderfluid",
    genderqueer: "Genderqueer",
    agender: "Agender",
    intersex: "Intersex",
    two_spirit: "Two-Spirit",
    questioning: "Questioning",
    prefer_not_to_say: "Prefer not to say",
    other: "Other",
  };

  $: levelLabel = labels[level] ?? level.toUpperCase();
  $: sexLabel = sexLabels[sex] ?? "Prefer not to say";
  $: scoreNumber = Number(score);
  $: recommendation =
    scoreNumber >= 90
      ? "Immediate passport lock and airport-access restriction advised."
      : scoreNumber >= 70
        ? "Minimize exposure to Japan travel content and monitor patient behavior."
        : "Periodic observation and comfort food intervention may reduce symptoms.";
</script>

<article class="sheet">
  <header class="top">
    <div>
      <p class="kicker">Medical Certificate</p>
      <h1>Acute Episode of Japan Ikitai Syndrome</h1>
    </div>
    <div class="status">
      <span>STATUS</span>
      <strong>{levelLabel}</strong>
    </div>
  </header>

  <section class="grid">
    <div class="label">Patient Name</div>
    <div class="value">{patient}</div>
    <div class="label">Date of Birth</div>
    <div class="value">{birth}</div>
    <div class="label">Gender Identity</div>
    <div class="value">{sexLabel}</div>
    <div class="label">Address</div>
    <div class="value">{address}</div>
    <div class="label">Japan Ikitai Score</div>
    <div class="value">{scoreNumber} / 100</div>
    <div class="label">Certificate ID</div>
    <div class="value">{serial}</div>
  </section>

  <section class="diagnosis">
    <h2>Clinical Notes</h2>
    <p>{note}</p>
    <p class="recommend">Recommendation: {recommendation}</p>
  </section>

  <footer class="bottom">
    <div class="meta">
      <p>Issue Date: {issued}</p>
      <p>Medical Institution: {hospital}</p>
    </div>

    <div class="sign-wrap">
      <div class="seal">FOR FUN</div>
      <p class="doctor">Attending Physician: {doctor}</p>
    </div>
  </footer>
</article>

<style>
  :global(jp-certificate-preview) {
    display: block;
    width: 100%;
    contain: layout paint style;
  }

  .sheet {
    box-sizing: border-box;
    width: min(100%, 940px);
    min-height: 1120px;
    margin: 0 auto;
    padding: 40px;
    border: 3px solid #4b2713;
    background:
      radial-gradient(circle at 5% 5%, rgba(255, 255, 255, 0.48), transparent 26%),
      linear-gradient(145deg, #fff8e9 0%, #f8ecd6 38%, #f6e4c2 100%);
    color: #25130b;
    box-shadow: inset 0 0 0 1px rgba(62, 36, 21, 0.22);
    overflow-x: hidden;
  }

  .top {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-bottom: 1px solid rgba(61, 34, 20, 0.38);
    padding-bottom: 20px;
  }

  .kicker {
    margin: 0;
    letter-spacing: 0.12em;
    font-size: 12px;
    text-transform: uppercase;
    color: rgba(50, 31, 20, 0.72);
  }

  h1 {
    margin: 8px 0 0;
    line-height: 1.2;
    font-size: 30px;
  }

  .status {
    min-width: 150px;
    text-align: right;
  }

  .status span {
    display: block;
    font-size: 12px;
    color: rgba(43, 28, 16, 0.7);
  }

  .status strong {
    display: inline-block;
    margin-top: 8px;
    border: 2px solid #ad0f22;
    color: #ad0f22;
    padding: 8px 14px;
    font-size: 18px;
    letter-spacing: 0.08em;
  }

  .grid {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 160px 1fr;
    border: 1px solid rgba(63, 34, 20, 0.3);
  }

  .label,
  .value {
    padding: 12px 14px;
    border-bottom: 1px solid rgba(63, 34, 20, 0.22);
  }

  .value,
  .diagnosis p,
  .doctor,
  .meta p,
  h1 {
    overflow-x: hidden;
    text-wrap: wrap;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .label {
    font-weight: 700;
    border-right: 1px solid rgba(63, 34, 20, 0.22);
    background: rgba(120, 80, 43, 0.1);
  }

  .grid > :nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .diagnosis {
    margin-top: 26px;
    border: 1px solid rgba(63, 34, 20, 0.3);
    padding: 18px;
  }

  h2 {
    margin: 0;
    font-size: 21px;
  }

  .diagnosis p {
    margin: 14px 0 0;
    line-height: 1.65;
    font-size: 16px;
  }

  .recommend {
    font-weight: 600;
    color: #8f0616;
  }

  .bottom {
    margin-top: 38px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 18px;
  }

  .meta p {
    margin: 6px 0;
    font-size: 14px;
  }

  .sign-wrap {
    text-align: right;
  }

  .seal {
    margin-left: auto;
    display: grid;
    place-items: center;
    width: 92px;
    height: 92px;
    border-radius: 999px;
    border: 4px double #c1121f;
    color: #c1121f;
    font-weight: 700;
    letter-spacing: 0.08em;
    transform: rotate(-12deg);
    background: rgba(255, 255, 255, 0.3);
  }

  .doctor {
    margin: 14px 0 0;
    font-size: 15px;
    font-weight: 700;
  }

  @media (max-width: 860px) {
    .sheet {
      min-height: auto;
      padding: 24px;
    }

    h1 {
      font-size: 22px;
    }

    .top {
      flex-direction: column;
    }

    .status {
      text-align: left;
    }

    .grid {
      grid-template-columns: 118px 1fr;
    }

    .bottom {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media print {
    .sheet {
      width: 194mm;
      min-height: 273mm;
      margin: 0;
      box-shadow: none;
      break-inside: avoid;
    }
  }
</style>
