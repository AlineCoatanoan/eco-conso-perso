# ♻️ Eco-Conso-Perso

**Eco-Conso-Perso** est une application web qui permet à chacun d'estimer l'empreinte carbone mensuelle de son logement, et de la convertir en équivalent kilomètres en voiture.  
L'objectif ? Sensibiliser à l'impact environnemental de notre quotidien de manière simple, visuelle et partageable.

## 🚀 Fonctionnalités

- 🧮 **Calcul du score environnemental** (sur 100)
- 📊 **Répartition des postes de consommation** via un graphique interactif
- 🚗 **Équivalent CO₂ en kilomètres voiture**
- 📄 **Export PDF** des résultats (via jsPDF + html2canvas)
- 📤 **Partage facile** du score avec bouton de copie

---

## 📦 Technologies utilisées

| Technologie                | Rôle                           |
|----------------------------|--------------------------------|
| React 19                   | Framework principal            |
| Vite                       | Build ultra-rapide             |
| Tailwind CSS               | Style responsive & moderne     |
| Framer Motion              | Animations fluides             |
| Recharts                   | Graphiques interactifs         |
| jsPDF & html2canvas        | Export en PDF                  |
| React Circular Progressbar | Indicateur circulaire de score |
| React Router DOM 7         | Navigation SPA                 |

---

## 🤖 Aide à la rédaction

Certaines parties de ce projet, y compris ce README, ont été rédigées ou assistées à l’aide de l’intelligence artificielle (ChatGPT d’OpenAI) pour gagner du temps, structurer les idées et améliorer la clarté de la présentation. (j'adore ses icônes dans sa rédaction du READ ME^^)

---

## 🧾 Méthodologie de calcul

Basée sur les données officielles de l'**ADEME** (Base Carbone v23.0) :

| Poste       | Unité saisie     | Émission CO₂ (kg) |
|-------------|------------------|-------------------|
| Électricité | kWh/mois         | 1 kWh = 0.06 kg   |
| Gaz naturel | kWh/mois         | 1 kWh = 0.234 kg  |
| Eau potable | L/mois           | 1 L = 0.00018 kg  |
| Internet    | Heures/jour      | 1h = 0.15 kg/jour |
| Téléphone   | Heures/jour      | 1h = 0.17 kg/jour |

👉 Le total des kg de CO₂ est converti en **kilomètres voiture** :  
**1 km = 0.2 kg de CO₂**

---

## 🎯 Exemple de résultat

> Votre logement émet environ **52.3 kg de CO₂/mois**, soit l'équivalent d’un trajet en voiture de **261 km**.  

✨ Score global : **78/100**  
📉 Répartition visible via un graphique  
📄 Téléchargement PDF possible  
📤 Partageable via un simple clic

---

## 📜 Sources

📄 ADEME – Base Carbone v23.0
📄 EcoInfo – CNRS
📄 Data conversion CO₂ ↔ km voiture

---

## 🛠️ Installation locale


✨ git clone https://github.com/ton-pseudo/eco-conso-perso.git
✨ cd eco-conso-perso
✨ pnpm install
✨ pnpm dev

---

### 🌱 Engagement environnemental

Ce projet, axé sur la sensibilisation à l'impact carbone de nos usages numériques quotidiens, intègre une réflexion écologique jusque dans son mode d'hébergement.

Le site est hébergé sur **Vercel**, une plateforme gratuite et optimisée pour les projets front-end. Bien que Vercel ne revendique pas directement un hébergement "vert", elle repose sur des infrastructures cloud telles qu'**AWS**, qui s'engage à alimenter ses centres de données à 100 % en énergies renouvelables d'ici 2025. De plus, le recours à un **CDN (Content Delivery Network)** réparti permet de minimiser les distances de chargement et donc la consommation énergétique côté utilisateur.

✅ Ce choix d’hébergement allie **praticité**, **gratuité** et une certaine **sobriété numérique**, en cohérence avec l’objectif pédagogique et écologique du projet.

---

## 📃 Licence
MIT – Fais-en bon usage, partage l’outil et améliore-le !