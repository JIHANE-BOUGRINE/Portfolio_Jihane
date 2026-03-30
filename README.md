# 🌐 Portfolio – Jihane Bougrine

Portfolio personnel moderne, responsive et déployable sur GitHub Pages.

---

## 📁 Structure du projet

```
portfolio/
│
├── index.html              ← Page principale (structure + contenu)
├── style.css               ← Styles (thème clair/sombre, animations, responsive)
├── script.js               ← JavaScript (dark mode, scroll reveal, interactions)
├── cv_jihane_bougrine.pdf  ← Votre CV à placer ici (⚠️ indispensable)
└── README.md               ← Ce fichier
```

---

## 🚀 Déploiement sur GitHub Pages

### Étape 1 – Préparer le dépôt

1. Créez un compte sur [github.com](https://github.com) si ce n'est pas déjà fait.
2. Créez un **nouveau dépôt public** nommé exactement :
   ```
   votre-pseudo.github.io
   ```
   *(Remplacez `votre-pseudo` par votre nom d'utilisateur GitHub)*
   
   **Exemple :** `jihane-bougrine.github.io`

### Étape 2 – Ajouter votre CV

Renommez votre fichier CV en `cv_jihane_bougrine.pdf` et placez-le dans le dossier du projet.

### Étape 3 – Uploader les fichiers

**Option A – Via l'interface GitHub (sans Git) :**
1. Ouvrez votre dépôt sur GitHub
2. Cliquez **"Add file" → "Upload files"**
3. Glissez-déposez tous les fichiers : `index.html`, `style.css`, `script.js`, `cv_jihane_bougrine.pdf`
4. Cliquez **"Commit changes"**

**Option B – Via Git (recommandé) :**
```bash
# Cloner le dépôt
git clone https://github.com/votre-pseudo/votre-pseudo.github.io.git
cd votre-pseudo.github.io

# Copier vos fichiers ici, puis :
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Étape 4 – Activer GitHub Pages

1. Allez dans votre dépôt → **Settings**
2. Dans le menu gauche : **Pages**
3. Sous **"Source"** → sélectionnez **"Deploy from a branch"**
4. Branch : **main** | Folder : **/ (root)**
5. Cliquez **Save**

### Étape 5 – Votre site est en ligne ! 🎉

Après 1–2 minutes, votre portfolio sera accessible à :
```
https://votre-pseudo.github.io
```

---

## 🔧 Personnalisation

| Élément | Fichier | Où modifier |
|---------|---------|-------------|
| Photo de profil | `index.html` | Remplacer `<span class="avatar-initials">JB</span>` par une balise `<img>` |
| Couleur principale | `style.css` | Variable `--primary` (ligne ~12) |
| Liens réseaux sociaux | `index.html` | Attributs `href` des balises `<a>` avec classe `social-link` |
| Projets | `index.html` | Section `id="projects"` |
| Contenu | `index.html` | Tous les textes sont directement dans le HTML |

### Ajouter votre vraie photo

Dans `index.html`, remplacez la div `.hero-avatar` par :
```html
<div class="hero-avatar" aria-label="Photo de Jihane Bougrine">
  <img src="photo.jpg" alt="Jihane Bougrine" 
       style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" />
</div>
```
Puis placez `photo.jpg` dans le dossier du projet.

---

## ✨ Fonctionnalités

- ✅ Design minimaliste moderne avec palette Teal & Amber
- ✅ Mode sombre / clair avec mémorisation (localStorage)
- ✅ Navigation sticky avec liens actifs au scroll
- ✅ Animations au scroll (Intersection Observer)
- ✅ Parallaxe légère sur les formes du hero (souris)
- ✅ Avatar morphing animé en CSS
- ✅ Responsive : mobile, tablette, desktop
- ✅ SEO : balises meta, accessibilité ARIA
- ✅ Bouton retour en haut
- ✅ Téléchargement du CV
- ✅ Zéro dépendance backend – 100% statique

---

## 🛠️ Technologies utilisées

- HTML5 sémantique
- CSS3 (Variables, Animations, Grid, Flexbox)
- JavaScript vanilla (ES6+)
- Bootstrap 5.3
- Bootstrap Icons
- Google Fonts (Playfair Display + DM Sans)

---

*Portfolio créé pour Jihane Bougrine – Ingénieure en Génie Informatique, ENSA Fès.*
