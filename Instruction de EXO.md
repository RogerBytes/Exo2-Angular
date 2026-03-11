# EXO-ANGULAR

---

# Exercice 1 — Afficher un message selon l’état de connexion

### Objectif

Utiliser `@if` pour afficher un contenu différent selon une condition.

### Consigne

Dans le template :

- Si l'utilisateur est connecté → afficher
    
    `Bienvenue Alice`
    
- Sinon → afficher
    
    `Veuillez vous connecter`
    

---

# Exercice 2 — Afficher une liste de produits

### Objectif

Utiliser `@for` pour parcourir une liste.

### Données

```tsx
export class AppComponent {
  products : any[] = [
    { name: "Clavier", price: 50 },
    { name: "Souris", price: 25 },
    { name: "Écran", price: 200 }
  ];
}
```

### Consigne

Afficher chaque produit dans une liste HTML avec :

- le nom
- le prix

---

# Exercice 3 — Gérer une liste vide

### Données

```tsx
export class AppComponent {
  tasks: string[] = [];
}
```

### Consigne

- Si la liste contient des tâches → les afficher
- Sinon → afficher `Aucune tâche disponible`

---

# Exercice 4 — Afficher un statut utilisateur

### Objectif

Utiliser `@switch`.

### Données

```tsx
export class AppComponent {
  role = "admin";
}
```

### Consigne

Afficher :

- `Accès administrateur` si role = admin
- `Accès utilisateur` si role = user
- `Accès invité` sinon

---

# Exercice 5 — Combiner `@if` et `@for`

### Objectif

Combiner plusieurs contrôles de flux.

### Données

```tsx
export class AppComponent {
  isAdmin = true;

  users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
  ];
}
```

### Consigne

- Si l'utilisateur est admin → afficher la liste
- Pour chaque utilisateur :
    - afficher seulement ceux qui sont **actifs**

---