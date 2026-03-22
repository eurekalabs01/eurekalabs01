// ============================================================================
//  EUREKA LABS — SITE DATA
//  All content displayed on the site. Edit this file, commit, push to deploy.
//  See README.md for instructions.
// ============================================================================

const SITE_BASE = "https://eurekalabs.net";

const CATEGORIES = {
  mobile:       { label: "Mobile",                 color: "#1d6b52", bg: "#e4f2ec" },
  network:      { label: "Network",                color: "#2a6f97", bg: "#e5f0f7" },
  system:       { label: "System",                 color: "#c45a2d", bg: "#faeee8" },
  ai:           { label: "AI",                     color: "#6b4f8a", bg: "#f0eaf6" },
  genai:        { label: "Gen AI",                 color: "#a84860", bg: "#f8e8ec" },
  deeplearning: { label: "Deep Learning Security", color: "#a67c30", bg: "#f5edda" },
  quantum:      { label: "Quantum",                color: "#4a6670", bg: "#e8eef0" },
};

const LEVELS = {
  fundamental: { label: "Fundamental", color: "#5c5a52", bg: "#e6e2da" },
  advanced:    { label: "Advanced",    color: "#2a6f97", bg: "#e5f0f7" },
  challenging: { label: "Challenging", color: "#c45a2d", bg: "#faeee8" },
};

const TEAM = [
  { name: "Liran Ma",        role: "Principal Investigator", affiliation: "Miami University" },
  { name: "Zhipeng Cai",     role: "Principal Investigator", affiliation: "Georgia State University" },
  { name: "Curby Alexander", role: "Principal Investigator", affiliation: "Texas Christian University" },
  { name: "Yingshu Li",      role: "Principal Investigator", affiliation: "Georgia State University" },
];

const LABS = [

  {
    id: "wep-passive", oldId: "5f305aa60599dd0208c670fb",
    title: "WEP Cracking via Passive Listening",
    categories: ["mobile"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "The purpose of this lab is to understand and exploit the security vulnerabilities of an 802.11 WEP-secured network. You will passively collect enough WEP IVs (Initialization Vectors) to determine the WEP encryption key. After obtaining the key, you will need to masquerade as a legitimate WEP client on the network, access a server, and download a file.",
    image: "/icon/5f305aa60599dd0208c670fb/eavesdropping.jpg",
    pdf: "/lab_manual/5f305aa60599dd0208c670fb/WepCrackBasic.pdf",
    updated: "2020-08-10", estimatedTime: "1 hour",
  },

  {
    id: "wep-active", oldId: "5f305b750599dd0208c670fc",
    title: "WEP Cracking via Active Injection",
    categories: ["mobile"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "The purpose of this lab is to continue exploring the vulnerabilities of the 802.11 WEP security protocol. It is well-known that the WEP protocol is crippled with numerous security flaws. In the WEP Cracking via Passive Listening lab, we explored methods of exploiting these flaws when a large amount of data was present. However, it is unlikely that a sufficiently large data stream is present on a network during regular usage. In this lab, we will use more efficient techniques to continue exploiting the WEP protocol.",
    image: "/icon/5f305b750599dd0208c670fc/inject.jpg",
    pdf: "/lab_manual/5f305b750599dd0208c670fc/WepCrackAdvanced.pdf",
    updated: "2020-08-09", estimatedTime: "1 hour",
  },

  {
    id: "wpa-handshake", oldId: "5f305d790599dd0208c670fd",
    title: "WPA-PSK Key Cracking via Handshake Capture",
    categories: ["mobile"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "The first generation of the IEEE 802.11 Wired Equivalent Privacy (WEP) security standard was found to be vulnerable to various statistical weaknesses in the encryption algorithm. The Wi-Fi Alliance created Wi-Fi Protected Access (WPA) as an interim standard. However, the WPA Pre-Shared Key (PSK) mode is crackable due to a flaw in the authentication procedure. An effective way to crack WPA-PSK is to force re-authentication of a legitimate client and capture the four-way handshake. A robust dictionary attack may recover the password, making it potentially easier to crack WPA-PSK than WEP.",
    image: "/icon/5f305d790599dd0208c670fd/handshake.png",
    pdf: "/lab_manual/5f305d790599dd0208c670fd/WPAPSKCrack.pdf",
    updated: "2020-08-10", estimatedTime: "2 hours",
  },

  {
    id: "wps-unlock", oldId: "5f3061430599dd0208c670fe",
    title: "\u201cUnlock\u201d Wi-Fi Protected Setup (WPS)",
    categories: ["mobile"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "Wi-Fi Protected Setup, or WPS, is a push-button authentication method for WPA2 Personal-secured networks. WPS relies mainly on physical security, or the idea that a potential attacker needs to be physically present to compromise the system. However, this lab will demonstrate how a remote WPS attack is still possible.",
    image: "/icon/5f3061430599dd0208c670fe/wps.png",
    pdf: "/lab_manual/5f3061430599dd0208c670fe/WPSCrack.pdf",
    updated: "2020-08-28", estimatedTime: "5 hours",
  },

  {
    id: "wpa2-enterprise", oldId: "5f3069b10599dd0208c670ff",
    title: "Secure your WiFi with WPA2-Enterprise",
    categories: ["mobile"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "The purpose of this lab is to set up a WPA/WPA2 Enterprise (TKIP/AES + EAP-TTLS/PEAP) wireless network using FreeRadius and OpenWRT on a router. In addition, you will configure Linux/Windows/Android clients to connect to the network.",
    image: "/icon/5f3069b10599dd0208c670ff/wpa2-enterprise.png",
    pdf: "/lab_manual/5f3069b10599dd0208c670ff/WPA2-Enterprise_Buffalo.pdf",
    updated: "2020-08-10", estimatedTime: "6 hours",
  },

  {
    id: "mobile-platform", oldId: "5f306fbf0599dd0208c67100",
    title: "Mobile Lab Platform for Users",
    categories: ["mobile"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "In this document, we first introduce how to create a user lab platform to perform activities for our Eureka labs. Next, we will exercise with a few important wireless-related commands. Lastly, we will perform a rudimentary wireless network survey with these tools and commands.",
    image: "/icon/5f306fbf0599dd0208c67100/platform.png",
    pdf: "/lab_manual/5f306fbf0599dd0208c67100/00_platform.pdf",
    updated: "2020-08-10", estimatedTime: "1 hour",
  },

  {
    id: "hide-and-seek", oldId: "5f30ab3f0599dd0208c67103",
    title: "\u201cHide-and-Seek\u201d in Wireless",
    categories: ["mobile"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "In this basic lab, we will set up a simple wireless network with SSID hiding enabled. Students will be tasked to perform wireless network hide-and-seek (a simple wireless penetration test).",
    image: "/icon/5f30ab3f0599dd0208c67103/ssid-hiding.jpg",
    pdf: "/lab_manual/5f30ab3f0599dd0208c67103/hide-and-seek.pdf",
    updated: "2020-08-10", estimatedTime: "1 hour",
  },

  {
    id: "mischievous-mac", oldId: "5f30d3920599dd0208c67104",
    title: "Mischievous MAC?",
    categories: ["mobile"], level: "challenging",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "Carrier Sense Multiple Access (CSMA) is a probabilistic media access control (MAC) protocol in which a node verifies the absence of other traffic before transmitting on a shared transmission medium. CSMA/CA (Collision Avoidance) is a protocol for carrier transmission in 802.11 networks. In this lab, we will observe how traffic is regulated by CSMA/CA. With this knowledge, we can detect abuses and misbehavior targeted at the MAC layer.",
    image: "/icon/5f30d3920599dd0208c67104/csma.png",
    pdf: "/lab_manual/5f30d3920599dd0208c67104/00_mac.pdf",
    updated: "2020-08-10", estimatedTime: "3 hours",
  },

  {
    id: "evil-twin", oldId: "5f34150e0599dd0208c67106",
    title: "Evil Twin AP Attacks and Prevention",
    categories: ["mobile", "network"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "An evil twin is a malicious access point set up to copy the identity of a real access point, hence the name twin, in order to eavesdrop and steal sensitive information. This attack will trick unsuspecting users to connect to it, and from there, the attacker can perform many other attacks like man-in-the-middle or phishing.",
    image: "/icon/5f34150e0599dd0208c67106/evil-twin.png",
    pdf: "/lab_manual/5f34150e0599dd0208c67106/00_Evil_Twin.pdf",
    updated: "2020-08-12", estimatedTime: "4 hours",
  },

  {
    id: "passing-passwords", oldId: "606a1c030599dd07e0d3c52e",
    title: "Passing on Passwords",
    categories: ["network", "system"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai",
    description: "When passwords are compromised, they can lead to unintentional data access, putting users at risk.",
    image: "/icon/606a1c030599dd07e0d3c52e/passing-on-passwords.png",
    pdf: "/lab_manual/606a1c030599dd07e0d3c52e/00_Authentication.pdf",
    updated: "2021-04-04", estimatedTime: "2 hours",
  },

  {
    id: "xss", oldId: "6094a6a30599dd07e0d3c52f",
    title: "XSS Attack and Defense",
    categories: ["network"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai",
    description: "Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites.",
    image: "/icon/6094a6a30599dd07e0d3c52f/xss.jpeg",
    pdf: "/lab_manual/6094a6a30599dd07e0d3c52f/xss.pdf",
    updated: "2021-05-07", estimatedTime: "1 hour",
  },

  {
    id: "take-my-coin", oldId: "6094a9d50599dd07e0d3c530",
    title: "Take My Coin!",
    categories: ["network"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai",
    description: "A blockchain is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. In this lab, we will exercise coin mining and block creation.",
    image: "/icon/6094a9d50599dd07e0d3c530/bitcoin.jpeg",
    pdf: "/lab_manual/6094a9d50599dd07e0d3c530/Take_My_Coin.pdf",
    updated: "2021-05-07", estimatedTime: "1 hour",
  },

  {
    id: "identity-demystified", oldId: "60957ca80599dd07e0d3c531",
    title: "Identity Demystified",
    categories: ["network"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "In cryptography, a public key certificate, also known as a digital certificate or identity certificate, is an electronic document used to prove the ownership of a public key. The certificate includes information about the key, information about the identity of its owner (called the subject), and the digital signature of an entity that has verified the certificate\u2019s contents (called the issuer).",
    image: "/icon/60957ca80599dd07e0d3c531/digital-certificates.png",
    pdf: "/lab_manual/60957ca80599dd07e0d3c531/Identity_Demystified.pdf",
    updated: "2021-05-07", estimatedTime: "2 hours",
  },

  {
    id: "crypto-flickered", oldId: "6095800e0599dd07e0d3c532",
    title: "Crypto Flickered!",
    categories: ["system"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "Length extension attacks can cause serious vulnerabilities when people mistakenly try to construct something like an HMAC by using hash(secret || message). Many hash functions are subject to length extension. If we know the hash of an n-block message, we can find the hash of longer messages by applying the compression function for each additional block.",
    image: "/icon/6095800e0599dd07e0d3c532/hash-extension.png",
    pdf: "/lab_manual/6095800e0599dd07e0d3c532/Crytpo_Flickered.pdf",
    updated: "2021-05-07", estimatedTime: "2 hours",
  },

  {
    id: "bleeding-heart", oldId: "609de7ec0599dd07e0d3c533",
    title: "Bleeding Heart",
    categories: ["network", "system"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "The Heartbleed bug was a serious vulnerability in OpenSSL. The weakness allowed attackers to steal information that would be protected in normal conditions by the SSL/TLS encryption used to secure connections. This compromises the secret keys used to identify the service providers and to encrypt the traffic, the names and passwords of the users and the actual content.",
    image: "/icon/609de7ec0599dd07e0d3c533/heartbleeding.jpeg",
    pdf: "/lab_manual/609de7ec0599dd07e0d3c533/bleeding-heart.pdf",
    updated: "2021-05-14", estimatedTime: "1 hour",
  },

  {
    id: "not-so-personal-data", oldId: "60a052ae0599dd07e0d3c534",
    title: "Not-so-Personal Data",
    categories: ["network"], level: "challenging",
    authors: "Honghui Xu, Zuobin Xiong, Zhipeng Cai",
    description: "This document serves as an experiment guide for the purpose of using Generative Adversarial Networks (GANs) on privacy attack and privacy protection.",
    image: "/icon/60a052ae0599dd07e0d3c534/not-so-personal.jpeg",
    pdf: "/lab_manual/60a052ae0599dd07e0d3c534/GAP.pdf",
    updated: "2021-05-15", estimatedTime: "6 hours",
  },

  {
    id: "invisible-surfing", oldId: "60a9a3130599dd06f44504be",
    title: "\u201cInvisible\u201d Surfing",
    categories: ["network", "system"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "We all need safe access to the Internet free from technology-facilitated threats such as cyberstalking and harassment. The learning objectives of this lab are for students to be aware of personally identifiable information. Students will experiment with technologies such as Virtual Private Networks (VPNs) that protect identity information via encryption.",
    image: "/icon/60a9a3130599dd06f44504be/invisible-surfing.jpeg",
    pdf: "/lab_manual/60a9a3130599dd06f44504be/Invisioble_Surfing.pdf",
    updated: "2021-05-23", estimatedTime: "3 hours",
  },

  {
    id: "shell-shattered", oldId: "60c50a2b0599dd2217d95944",
    title: "Shell Shattered",
    categories: ["system"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai",
    description: "Shellshock is a security bug in the Unix Bash shell that could enable an attacker to cause Bash to execute arbitrary commands and gain unauthorized access to many Internet-facing services, such as web servers, that use Bash to process requests. The bug causes Bash to unintentionally execute commands when the commands are concatenated to the end of function definitions stored in the values of environmental variables.",
    image: "/icon/60c50a2b0599dd2217d95944/Shellshock-bug.png",
    pdf: "/lab_manual/60c50a2b0599dd2217d95944/Shattered_Shell.pdf",
    updated: "2021-06-12", estimatedTime: "3 hours",
  },

  {
    id: "leaky-database", oldId: "60c584850599dd2217d95945",
    title: "A \u201cLeaky\u201d Database",
    categories: ["system"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "SQL injection is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution. SQL injection must exploit a security vulnerability in an application\u2019s software, for example, when user input is either incorrectly filtered or not strongly typed. SQL injection is mostly known as an attack vector for websites but can be used to attack any type of SQL database.",
    image: "/icon/60c584850599dd2217d95945/sql-injection.jpeg",
    pdf: "/lab_manual/60c584850599dd2217d95945/Leaky_Database.pdf",
    updated: "2021-06-13", estimatedTime: "3 hours",
  },

  {
    id: "poodle", oldId: "60c63b0b0599dd2217d95946",
    title: "This POODLE Bites!",
    categories: ["network", "system"], level: "challenging",
    authors: "Liran Ma, Zhipeng Cai",
    description: "The Padding Oracle On Downgraded Legacy Encryption (POODLE) attack, also known as CVE-2014-3566, is an exploit used to steal information from secure connections, including cookies, passwords and other browser data encrypted by the SSL protocol. It allows attackers to decrypt network traffic between a client and a server.",
    image: "/icon/60c63b0b0599dd2217d95946/poodle.jpeg",
    pdf: "/lab_manual/60c63b0b0599dd2217d95946/Poodle_Bites.pdf",
    updated: "2021-06-13", estimatedTime: "5 hours",
  },

  {
    id: "intruder-hunt", oldId: "60c7e7100599dd069cb7cb71",
    title: "Intruder Hunt",
    categories: ["network", "system"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "An intrusion detection system (IDS) is a device or software application that monitors a network or systems for malicious activity or policy violations. Any intrusion activity or violation is typically reported either to an administrator or collected centrally using a security information and event management (SIEM) system.",
    image: "/icon/60c7e7100599dd069cb7cb71/intruder-hunt.png",
    pdf: "/lab_manual/60c7e7100599dd069cb7cb71/Intruder_Hunt.pdf",
    updated: "2021-06-14", estimatedTime: "4 hours",
  },

  {
    id: "walls-have-ears", oldId: "60dbb1f60599dd069cb7cb72",
    title: "Walls Have Ears",
    categories: ["mobile"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "The purpose of this lab is to inspire interest in mobile security by demonstrating the possibility of wireless tapping. We will explore some security vulnerabilities that are associated with wireless-based VoIP services. For example, a third party may be able to intercept a phone conversation and replay it due to the openness of wireless communications.",
    image: "/icon/60dbb1f60599dd069cb7cb72/walls-have-ears.png",
    pdf: "/lab_manual/60dbb1f60599dd069cb7cb72/Walls-Have-Ears.pdf",
    updated: "2021-06-29", estimatedTime: "2 hours",
  },

  {
    id: "video-aficionado", oldId: "60e737670599dd069cb7cb74",
    title: "Video Aficionado",
    categories: ["mobile"], level: "challenging",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "The purpose of this lab is to understand and exploit the vulnerabilities of open-access mobile data for privacy breaches. Typically, mobile devices have rigorous access control mechanisms to protect sensitive user data. However, not all mobile data is strictly prohibited for access, e.g., power consumption is considered non-sensitive. It is possible to infer private information from open-access data that is available to all apps.",
    image: "/icon/60e737670599dd069cb7cb74/video-aficionado.png",
    pdf: "/lab_manual/60e737670599dd069cb7cb74/Video-Aficionado.pdf",
    updated: "2021-07-08", estimatedTime: "8 hours",
  },

  {
    id: "one-pixel-attack", oldId: "60ec4e340599dd069cb7cb75",
    title: "\u201cPixie and Dixie vs. Mr. AI\u201d: One-Pixel Attack",
    categories: ["mobile"], level: "advanced",
    authors: "Zhipeng Cai, Liran Ma, Wei Cheng",
    description: "The purpose of this lab is to understand and exploit vulnerabilities of deep neural networks used in Internet of Things (IoT). Image data and a trained deep neural network model are typically used to classify an image on mobile and/or IoT devices. In this lab, you will pinpoint a vulnerable pixel such that changing this pixel will result in wrong classification prediction, which may confuse relevant security modules.",
    image: "/icon/60ec4e340599dd069cb7cb75/one-pixel-attack.jpeg",
    pdf: "/lab_manual/60ec4e340599dd069cb7cb75/OnePixelAttack.pdf",
    updated: "2021-07-12", estimatedTime: "6 hours",
  },

  {
    id: "wpa3-dragonfly", oldId: "60ed202f0599dd069cb7cb76",
    title: "WPA3-SAE: A Dragonfly Aims to Fix Wi-Fi\u2019s Wings",
    categories: ["mobile"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "In January 2018, WPA3 was announced as a replacement to WPA2. The WPA3 standard replaces the pre-shared key (PSK) exchange with Simultaneous Authentication of Equals (SAE). However, just one year since the launch of WPA3 and researchers have unveiled several serious vulnerabilities in the wireless security protocol that could allow attackers to recover the password of the Wi-Fi network.",
    image: "/icon/60ed202f0599dd069cb7cb76/dragonblood.jpeg",
    pdf: "/lab_manual/60ed202f0599dd069cb7cb76/00-wpa3-sae.pdf",
    updated: "2021-07-13", estimatedTime: "4 hours",
  },

  {
    id: "enhanced-open", oldId: "6106d0570599dd06d5706ea1",
    title: "Same, Same But Encrypted: An Enhanced Open Wi-Fi Network",
    categories: ["mobile"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "Wi-Fi Enhanced Open is a new security standard for public networks based on Opportunistic Wireless Encryption (OWE). It provides encryption and privacy on open, non-password-protected networks in areas such as cafes, hotels, restaurants, and libraries. WPA3 and Wi-Fi Enhanced Open improve overall Wi-Fi security, providing better privacy and robustness against some known attacks.",
    image: "/icon/6106d0570599dd06d5706ea1/wpa3-owe.png",
    pdf: "/lab_manual/6106d0570599dd06d5706ea1/wpa3-owe.pdf",
    updated: "2021-08-01", estimatedTime: "5 hours",
  },

  {
    id: "wpa-pmkid", oldId: "6109e0d20599dd06d5706ea2",
    title: "WPA-PSK Key Cracking with Pairwise Master Key Identifier",
    categories: ["mobile"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai, Wei Cheng",
    description: "In our Eureka Labs series, we have a lab that cracks WPA-PSK key via tricking a legitimate client into re-transmitting the EAPOL 4-way handshake frames. Differently, in this attack lab, the capture of a full EAPOL 4-way handshake is not required. The new attack is performed on the RSN IE (Robust Security Network Information Element) of a single EAPOL frame.",
    image: "/icon/6109e0d20599dd06d5706ea2/PMKID-attack.png",
    pdf: "/lab_manual/6109e0d20599dd06d5706ea2/WPA-PSK-PMKID.pdf",
    updated: "2021-08-04", estimatedTime: "4 hours",
  },

  {
    id: "zombie-apocalypse", oldId: "610f0e230599dd06d5706ea3",
    title: "Zombie Apocalypse: DoS Attacks and Defense",
    categories: ["network", "system"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "In this lab, we will launch various denial-of-service (DoS) attacking techniques in an attempt to slow down or completely prevent legitimate access to a service, and learn how to adopt appropriate technologies to defend against these attacks.",
    image: "/icon/610f0e230599dd06d5706ea3/zombie-apocalypse.jpeg",
    pdf: "/lab_manual/610f0e230599dd06d5706ea3/00_DoS_Attacks.pdf",
    updated: "2021-08-07", estimatedTime: "3 hours",
  },

  {
    id: "ethereum", oldId: "6417e25b0599dd7693f06ffa",
    title: "Nothing Ethereal About Ethereum",
    categories: ["network"], level: "advanced",
    authors: "Liran Ma, Zhipeng Cai",
    description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization. Ethereum network is a peer-to-peer network consisting of multiple nodes running the Ethereum client such as Geth.",
    image: "/icon/6417e25b0599dd7693f06ffa/Ethereum.png",
    pdf: "/lab_manual/6417e25b0599dd7693f06ffa/Ethereum-Main.pdf",
    updated: "2023-03-20", estimatedTime: "2 hours",
  },

  {
    id: "kerberos", oldId: "641bcbcb0599dd141991706f",
    title: "This Kerberos Never Sleeps",
    categories: ["network"], level: "fundamental",
    authors: "Liran Ma, Zhipeng Cai",
    description: "Kerberos is a network authentication protocol designed to provide strong authentication for client/server applications using secret-key cryptography. It works on the basis of tickets to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner. Kerberos protocol messages are protected against eavesdropping and replay attacks.",
    image: "/icon/641bcbcb0599dd141991706f/Kerberos.gif",
    pdf: "/lab_manual/641bcbcb0599dd141991706f/Kerberos.pdf",
    updated: "2023-03-23", estimatedTime: "2 hours",
  },

  {
    id: "toadally-safe-password", oldId: "646d63c80599dd1419917071",
    title: "Creating a \u201cToadally-Safe\u201d Password",
    categories: ["system"], level: "fundamental",
    authors: "Liran Ma, Taylor Griffin",
    description: "Passwords serve as the first line of defense when it comes to securing our online accounts. In today\u2019s digital landscape, where cyber threats loom at every corner, it is crucial to understand the significance of creating strong and secure passwords. In this lab, we will evaluate the strength of passwords and discover how to improve them.",
    image: "/icon/646d63c80599dd1419917071/toadally_safe_password.png",
    pdf: "/lab_manual/646d63c80599dd1419917071/00toadallySafe.pdf",
    updated: "2023-05-24", estimatedTime: "2 hours",
  },

  {
    id: "ransomwhale", oldId: "64adf8710599dd1419917072",
    title: "RansomWhale Unleashed",
    categories: ["network", "system"], level: "advanced",
    authors: "Liran Ma, Taylor Griffin",
    description: "Ransomware poses an ongoing and ever-evolving threat to computer security, jeopardizing the integrity of data and rendering files and systems absolutely useless. These attacks involve malicious software that encrypts victim data, holding it hostage and demanding a ransom in exchange for decrypting the files and restoring access.",
    image: "/icon/64adf8710599dd1419917072/rw_whale.png",
    pdf: "/lab_manual/64adf8710599dd1419917072/00_Ransomware.pdf",
    updated: "2023-07-12", estimatedTime: "3 hours",
  },

];
