/** Proof in Motion — case-study source data remains evidence-led: topology and claims map directly to inspected public repositories. */
export type CaseStudyStep = {
  label: string;
  title: string;
  copy: string;
  trace: string;
};

export type CaseStudyEvidence = {
  path: string;
  claim: string;
  url: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  mode: string;
  name: string;
  headline: string;
  summary: string;
  repository: string;
  repositoryUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  status: string;
  tags: string[];
  artifact: string;
  topologyLabel: string;
  topologyIntro: string;
  steps: CaseStudyStep[];
  decisions: Array<{ label: string; value: string; copy: string }>;
  evidence: CaseStudyEvidence[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "onchain-sip",
    index: "01",
    mode: "AVALANCHE FUJI / WALLET PRODUCT",
    name: "Onchain SIP",
    headline: "A plan is state—\nnot a promise.",
    summary: "A systematic-investment prototype that turns a connected wallet, a funded plan, and an execution schedule into inspectable contract state on Avalanche Fuji.",
    repository: "TheCyperpunk/collegeproject",
    repositoryUrl: "https://github.com/TheCyperpunk/collegeproject",
    liveUrl: "https://onchainsip.vercel.app",
    liveLabel: "OPEN LIVE TESTNET",
    status: "LIVE TESTNET · DEPLOYED UI",
    tags: ["Next.js", "Solidity", "Wagmi", "RainbowKit", "Avalanche Fuji"],
    artifact: "CREATE → EXECUTE → FINALIZE",
    topologyLabel: "SYSTEM TOPOLOGY / PLAN LIFECYCLE",
    topologyIntro: "The product keeps the wallet journey legible while treating plan state as a contract read. A recovery lane reconstructs records from indexed events and transaction history when direct enumeration needs context.",
    steps: [
      { label: "01 / CONNECT", title: "Wallet + chain gate", copy: "RainbowKit and Wagmi bind the client to a connected address and require Avalanche Fuji before creation can proceed.", trace: "chainId === 43113" },
      { label: "02 / MODEL", title: "Plan constructor", copy: "The UI derives weekly, monthly, quarterly, or yearly intervals from investment and maturity inputs.", trace: "frequencySeconds" },
      { label: "03 / COMMIT", title: "Onchain SIPPlan", copy: "The contract records funding, interval, maturity, recipient, progress, and active status for ERC-20 or native AVAX plans.", trace: "createPlanWithNative()" },
      { label: "04 / REHYDRATE", title: "State recovery", copy: "Pool enumeration is merged with local storage; event logs and Routescan transaction reconstruction provide additional recovery paths.", trace: "getUserPoolNames()" },
      { label: "05 / SETTLE", title: "Execution + finalization", copy: "Eligible intervals transfer to the destination address; maturity finalizes any remaining balance and disables the plan.", trace: "executeSIP() → finalizeSIP()" },
    ],
    decisions: [
      { label: "CONTRACT MODEL", value: "SIPPlan", copy: "A plan contains the time, funding, execution, recipient, and activity fields needed to render a clear history." },
      { label: "DISCOVERY", value: "3 lanes", copy: "Direct pool reads, event logs, and decoded transaction history are all represented in the frontend hook surface." },
      { label: "USER SIGNAL", value: "TX states", copy: "Create, execute, and finalize operations drive visible success or error status and refresh the plan inventory." },
    ],
    evidence: [
      { path: "contracts/OnchainSIP.sol", claim: "SIPPlan state, native/ERC-20 creation, execution, finalization, events, and pool enumeration.", url: "https://github.com/TheCyperpunk/collegeproject/blob/main/contracts/OnchainSIP.sol" },
      { path: "frontend/hooks/useSIPContract.ts", claim: "Onchain plan reads plus event-log and transaction-history recovery paths.", url: "https://github.com/TheCyperpunk/collegeproject/blob/main/frontend/hooks/useSIPContract.ts" },
      { path: "frontend/app/page.tsx", claim: "Wallet-gated dashboard, input validation, transaction status, and plan controls.", url: "https://github.com/TheCyperpunk/collegeproject/blob/main/frontend/app/page.tsx" },
    ],
    result: "The source shows a full plan lifecycle rather than a static investment mock: establish a plan, read it back, execute its interval, and finalize it at maturity.",
  },
  {
    slug: "xmo-messenger",
    index: "02",
    mode: "NEXT.JS / MOBILE HANDOFF",
    name: "XMO Messenger",
    headline: "The web route\nends in the app.",
    summary: "A Next.js product surface built around mobile handoff: inspect an invite in the browser, preserve the state boundary, and continue through a native XMO deep link.",
    repository: "TheCyperpunk/award-experiment",
    repositoryUrl: "https://github.com/TheCyperpunk/award-experiment",
    status: "SOURCE MAINTAINED · 15 AUG 2026",
    tags: ["Next.js 15", "TypeScript", "GSAP", "Android App Links", "Tailwind"],
    artifact: "INVITE PREVIEW → xmo:// HANDOFF",
    topologyLabel: "SYSTEM TOPOLOGY / INVITE HANDOFF",
    topologyIntro: "The browser route validates the invite identifier before fetching a no-store preview. The public UI then carries the invite’s visible state into the native application boundary instead of pretending the web page owns the final join action.",
    steps: [
      { label: "01 / ROUTE", title: "Join-path parser", copy: "The landing component accepts a token only from the join path and rejects values outside its explicit identifier pattern.", trace: "TOKEN_PATTERN" },
      { label: "02 / PREVIEW", title: "Backend preview", copy: "A no-store, credential-free request obtains the invitation preview and preserves an unavailable state when the record cannot be used.", trace: "GET /invites/:token/preview" },
      { label: "03 / RENDER", title: "Typed public state", copy: "Group or channel type, join mode, name, member count, topic, and optional avatar are parsed before presentation.", trace: "InvitePreview" },
      { label: "04 / HANDOFF", title: "Native application", copy: "The resolved invitation becomes an xmo://join deep link, explicitly moving the user into the mobile client for the join action.", trace: "xmo://join/:token" },
      { label: "05 / VERIFY", title: "App-link build lane", copy: "A prebuild script generates Android asset links from signing and debug certificate fingerprints, guarding production deploys when the primary fingerprint is absent.", trace: ".well-known/assetlinks.json" },
    ],
    decisions: [
      { label: "STATE SHAPE", value: "typed preview", copy: "The route treats a malformed preview as unavailable rather than emitting a partially populated handoff page." },
      { label: "NETWORK POSTURE", value: "no-store", copy: "Preview requests omit credentials and referrer data, while an abort controller closes the request when the route unmounts." },
      { label: "MOBILE BRIDGE", value: "two links", copy: "Native xmo:// handoff handles the active app, while Android asset links support the web-to-app association layer." },
    ],
    evidence: [
      { path: "src/components/invite/InviteLanding.tsx", claim: "Token validation, preview parsing, unavailable handling, avatar request, and native join handoff.", url: "https://github.com/TheCyperpunk/award-experiment/blob/main/src/components/invite/InviteLanding.tsx" },
      { path: "scripts/prepare-assetlinks.mjs", claim: "Build-time Android asset-link generation with certificate-fingerprint validation.", url: "https://github.com/TheCyperpunk/award-experiment/blob/main/scripts/prepare-assetlinks.mjs" },
      { path: "src/app/account-deletion/page.tsx", claim: "A separate two-step OTP account-deletion route and explicit return-action handling.", url: "https://github.com/TheCyperpunk/award-experiment/blob/main/src/app/account-deletion/page.tsx" },
    ],
    result: "The architecture makes the web page a reliable transition surface: it validates, previews, explains the current state, and hands the confirmed invitation to the native XMO client.",
  },
  {
    slug: "soroban-vault",
    index: "03",
    mode: "STELLAR / TOKEN PROTOCOL",
    name: "SorobanVault",
    headline: "Policy travels\nwith the token.",
    summary: "A Stellar/Soroban lending and tokenization prototype whose contract logic couples a token interface with KYC controls, reward checkpoints, AMM state, and an EVM companion.",
    repository: "TheCyperpunk/SorobanVault-",
    repositoryUrl: "https://github.com/TheCyperpunk/SorobanVault-",
    status: "RUST CONTRACT · TESTED MODULES",
    tags: ["Rust", "Soroban", "Stellar", "Solidity", "Foundry"],
    artifact: "KYC → REWARD CHECKPOINT → TRANSFER",
    topologyLabel: "SYSTEM TOPOLOGY / CONTROLLED TOKEN FLOW",
    topologyIntro: "The Soroban contract applies policy at the transaction boundary. Its storage and event modules support a token interface while KYC, blacklist, rewards, and AMM-specific accounting alter what a balance operation means.",
    steps: [
      { label: "01 / INITIALIZE", title: "Admin + metadata", copy: "Initialization installs contract administration, token metadata, a reward rate, and a reward tick used by later accounting.", trace: "initialize()" },
      { label: "02 / ADMIT", title: "KYC + blacklist policy", copy: "Minting requires KYC; transfer preparation rejects invalid amounts and blacklisted destinations.", trace: "pass_kyc() / blacklist()" },
      { label: "03 / ACCRUE", title: "Reward checkpoints", copy: "Transfers and claims checkpoint balance-linked reward state before the accounting mutation occurs.", trace: "checkpoint_reward()" },
      { label: "04 / MOVE", title: "Token interface", copy: "Allowance, approval, transfer, transfer_from, burn, metadata, and supply operations sit on the Soroban token interface.", trace: "token::Interface" },
      { label: "05 / EXTEND", title: "AMM + EVM companion", copy: "AMM address handling changes depositor accounting; the repository also carries a Solidity XUSD companion and Foundry test surface.", trace: "update_amm_depositor_balance()" },
    ],
    decisions: [
      { label: "POLICY LAYER", value: "on transfer", copy: "Eligibility checks and reward checkpointing are applied before token balance movement, not merely at onboarding." },
      { label: "STATE LIFETIME", value: "TTL extended", copy: "Contract methods extend instance storage lifetime around token and configuration operations." },
      { label: "TEST SURFACE", value: "Soroban + EVM", copy: "The repository includes Soroban tests for transfers, rewards, KYC, blacklist, and ledger progression alongside Foundry tests for the XUSD companion." },
    ],
    evidence: [
      { path: "token/src/contract.rs", claim: "Soroban token interface, KYC and blacklist guards, rewards, AMM-address controls, and transfer checkpoints.", url: "https://github.com/TheCyperpunk/SorobanVault-/blob/main/token/src/contract.rs" },
      { path: "token/src/test.rs", claim: "Scenarios for token behavior, rewards, KYC/blacklist constraints, and simulated ledger progression.", url: "https://github.com/TheCyperpunk/SorobanVault-/blob/main/token/src/test.rs" },
      { path: "evm/src/XUSD.sol", claim: "Upgradeable EVM companion with role-controlled minting and authorization for upgrades.", url: "https://github.com/TheCyperpunk/SorobanVault-/blob/main/evm/src/XUSD.sol" },
    ],
    result: "The project’s strongest signal is not a marketing claim but the policy-rich contract boundary: compliance state, reward accounting, AMM behavior, and the token interface are implemented in the same execution path.",
  },
];

export const caseStudyBySlug = Object.fromEntries(caseStudies.map((study) => [study.slug, study]));
