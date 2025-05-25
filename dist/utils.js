export const Sort = (data, key) => {
    const sorted = [...data].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        if (typeof valA === 'string') return valA.localeCompare(valB);
        if (typeof valA === 'number') return valA - valB;
        return 0;
      });
    return sorted
}

export function SearchInItems(items, keyword) {
    const lowerKeyword = keyword.toLowerCase();
  
    return items.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(lowerKeyword)
      )
    );
  }
  