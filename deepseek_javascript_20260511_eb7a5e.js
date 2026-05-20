// src/components/UI/TabBar.jsx
export default function TabBar({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex gap-1 bg-cream2 rounded-lg p-1 mb-5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === tab.id
              ? 'bg-white text-ink shadow-sm'
              : 'text-ink3 hover:text-ink'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}