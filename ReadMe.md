# 🐦 Birds UI Library

**Birds** is a modular React component library built to automate dashboard creation, manage form inputs, and handle dynamic tables effortlessly. Designed with developer speed in mind, it provides ready-to-use components that save you time when building internal tools, admin panels, or student systems.

> 🧪 This is a testing version. Use in non-production environments and feel free to contribute feedback or improvements!

---

## 📦 Installation

```bash
npm install birds
# or
yarn add birds
````

---

## 🚀 Quick Example (Usage)

```tsx
import React from 'react';
import Birds from 'birds';
import { productsData, productsKeys } from './utils';
import { icons } from 'lucide-react';

function Dashboard() {
  const links = [
    { label: 'Home', path: '/', icon: <icons.House /> }
  ];

  return (
    <Birds.Provider links={links} title="Dashboard">
      <Birds.Table
        data={productsData}
        rows={productsKeys}
        onEdit={(item) => alert(`Edit ${item.name}`)}
        onDelete={(item) => alert(`Delete ${item.name}?`)}
      />

      <Birds.Form title="Add user" action="http://localhost:3000/api">
        <Birds.Input
          label="Full names"
          name="fullNames"
          placeholder="Enter full names..."
        />
        <Birds.Select
          label="Class Room"
          name="class"
          placeholder="Select a class room"
          options={{
            basicKeys: ['id', 'name'],
            data: productsData
          }}
        />
      </Birds.Form>
    </Birds.Provider>
  );
}

export default Dashboard;
```

---

## 📚 Components Overview

### 🧱 `<Birds.Provider />`

Wraps your dashboard layout with a sidebar and optional top bar.

**Props**:

* `links`: Array of navigation items (with label, path, icon)
* `title`: Title of the dashboard

```tsx
<Birds.Provider title="Dashboard" links={[{ label: "Home", path: "/", icon: <icons.House /> }]} >
  {/* children components go here */}
</Birds.Provider>
```

---

### 📋 `<Birds.Table />`

Displays a dynamic table using provided data and row keys.

**Props**:

* `data`: Array of data (JSON)
* `rows`: Array of strings (fields to show)
* `onEdit`, `onDelete`: Handlers for each row

```tsx
<Birds.Table
  data={productsData}
  rows={['id', 'name', 'price']}
  onEdit={(item) => console.log('Edit:', item)}
  onDelete={(item) => console.log('Delete:', item)}
/>
```

---

### 📝 `<Birds.Form />`

Form wrapper with submission capabilities via an `action` URL.

**Props**:

* `title`: Form title
* `action`: API endpoint URL
* `children`: Form fields (Input, Select)

```tsx
<Birds.Form title="Register Student" action="/api/register">
  <Birds.Input label="Name" name="name" placeholder="Enter name..." />
</Birds.Form>
```

---

### 🔤 `<Birds.Input />`

Standard text input.

**Props**:

* `label`: Field label
* `name`: Form field name
* `placeholder`: Input placeholder

```tsx
<Birds.Input label="Full Name" name="fullName" placeholder="John Doe" />
```

---

### 🔽 `<Birds.Select />`

Dropdown input with dynamic data population.

**Props**:

* `label`, `name`, `placeholder`: Standard field info
* `options`: Object with:

  * `basicKeys`: `[valueKey, labelKey]`
  * `data`: JSON array for options

```tsx
<Birds.Select
  label="Select Class"
  name="class"
  placeholder="Choose a class"
  options={{
    basicKeys: ['id', 'name'],
    data: classData
  }}
/>
```

---

## ✨ Key Features

* ⚙️ **Automated Dashboard Creation** — instantly scaffold layouts with sidebar, top bar, and content area.
* 📝 **Form Handling** — simplified, customizable forms with Input and Select components.
* 📊 **Table Builder** — dynamic tables built with just `data` and `rows` arrays.
* 🔐 **Basic Fake Authentication** — prebuilt structure to simulate login/logout logic.

---

## 👨‍🎓 Created By

Built and maintained with ❤️ by [Nkiko Hertier](https://github.com/nkiko-hertier)

---

## 📜 License

MIT License

```

---

### ✅ Next Steps (Optional)

Let me know if you'd like to also:

- Convert this into a markdown site (with Docusaurus or VitePress)
- Generate automatic prop types from your components
- Add CI/CD for publishing updates to NPM
- Add badges (version, license, downloads) at the top

Just say the word and I’ll help you set it all up.
```
