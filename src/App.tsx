import { useState } from "react";

const OrganizationalMapping = () => {
  // Define the custom colors as reusable style variables
  const colors = {
    primary: "#ededed",
    secondary: "#F5F7FA",
    text: {
      primary: "#333333", // Main text color
      buttons: "#FFFFFF", // Text color for default buttons
      selectedButtons: "#FFFFFF", // Text color for selected buttons
    },
    button: {
      default: "#2C3E50",
      hover: "#754353",
      selected: "#4E2D37",
    },
    highlight: "#23CE6B", // Highlight color
  };

  // Button ids are CampusPress slugs. Two labels do not match their slug:
  // Delegated voting is still /practices/delegated-deliberation/, and
  // Revisability is still /practices/revisable-rules/.
  const relationships = {
    models: [
      {
        id: "traditional-cooperative-governance-model",
        name: "Traditional cooperative governance model",
        practices: [
          "equal-voting",
          "parliamentary-procedure-roberts-rules-of-order",
          "deliberative-decision-making",
          "consent-based-decision-making",
          "open-working",
          "revisable-rules",
        ],
      },
      {
        id: "multi-stakeholder-cooperative-governance",
        name: "Multi-stakeholder cooperative governance",
        practices: [
          "weighted-voting",
          "ranked-choice-voting",
          "deliberative-decision-making",
          "rotating-leadership",
          "consent-based-decision-making",
          "open-working",
          "open-recognition",
        ],
      },
      {
        id: "public-commons-partnerships",
        name: "Public-commons partnerships (PCPs)",
        practices: [
          "participatory-budgeting",
          "consent-based-decision-making",
          "open-working",
        ],
      },
      {
        id: "sociocracy",
        name: "Sociocracy",
        practices: [
          "consent-based-decision-making",
          "consensus-decision-making",
          "circle-working",
          "rotating-leadership",
          "check-ins",
          "distributed-leadership",
          "deliberative-decision-making",
          "equal-voting",
          "non-violent-communication",
          "open-working",
          "revisable-rules",
        ],
      },
      {
        id: "open-cooperativism",
        name: "Open cooperativism",
        practices: [
          "open-working",
          "consensus-decision-making",
          "consent-based-decision-making",
          "circle-working",
          "check-ins",
          "distributed-leadership",
          "weighted-voting",
        ],
      },
      {
        id: "peer-governance",
        name: "Peer governance",
        practices: [
          "open-working",
          "lazy-consensus",
          "reputation-based-voting",
        ],
      },
      {
        id: "daos",
        name: "Decentralized Autonomous Organizations (DAOs)",
        practices: [
          "weighted-voting",
          "participatory-budgeting",
          "consent-based-decision-making",
          "distributed-leadership",
        ],
      },
      {
        id: "discos",
        name: "Distributed Cooperative Organizations (DisCOs)",
        practices: [
          "consent-based-decision-making",
          "distributed-leadership",
          "contributive-accounting",
          "open-working",
          "non-violent-communication",
        ],
      },
      {
        id: "liquid-democracy",
        name: "Liquid democracy",
        practices: [
          "equal-voting",
          "delegated-deliberation",
          "ranked-choice-voting",
          "consent-based-decision-making",
          "participatory-budgeting",
          "open-working",
        ],
      },
    ],
    practices: [
      {
        id: "equal-voting",
        name: "Equal voting",
        tools: [
          "deliberation-tools",
          "digital-voting-tools",
          "living-documentation-tools",
        ],
      },
      {
        id: "ranked-choice-voting",
        name: "Ranked choice voting",
        tools: ["digital-voting-tools", "living-documentation-tools"],
      },
      {
        id: "delegated-deliberation",
        name: "Delegated voting",
        tools: ["digital-voting-tools", "deliberation-tools"],
      },
      {
        id: "weighted-voting",
        name: "Weighted voting",
        tools: [
          "deliberation-tools",
          "digital-voting-tools",
          "living-documentation-tools",
        ],
      },
      {
        id: "reputation-based-voting",
        name: "Reputation-based voting",
        tools: [
          "contribution-tracking-tools",
          "peer-recognition-tools",
          "deliberation-tools",
        ],
      },
      {
        id: "consensus-decision-making",
        name: "Consensus decision-making",
        tools: ["deliberation-tools", "living-documentation-tools"],
      },
      {
        id: "consent-based-decision-making",
        name: "Consent-based decision-making",
        tools: ["deliberation-tools", "living-documentation-tools"],
      },
      {
        id: "lazy-consensus",
        name: "Lazy consensus",
        tools: [
          "deliberation-tools",
          "living-documentation-tools",
          "project-management-tools",
        ],
      },
      {
        id: "deliberative-decision-making",
        name: "Deliberative decision-making",
        tools: [
          "deliberation-tools",
          "living-documentation-tools",
          "group-facilitation-methods",
          "participatory-budgeting-tools",
        ],
      },
      {
        id: "parliamentary-procedure-roberts-rules-of-order",
        name: "Parliamentary procedure (Robert's Rules of Order)",
        tools: [
          "governance-codes",
          "deliberation-tools",
          "digital-voting-tools",
          "living-documentation-tools",
        ],
      },
      {
        id: "distributed-leadership",
        name: "Distributed leadership",
        tools: [
          "living-documentation-tools",
          "deliberation-tools",
          "capacity-planning-tools",
          "project-management-tools",
        ],
      },
      {
        id: "rotating-leadership",
        name: "Rotating leadership",
        tools: [
          "living-documentation-tools",
          "capacity-planning-tools",
          "deliberation-tools",
        ],
      },
      {
        id: "circle-working",
        name: "Circle working",
        tools: [
          "living-documentation-tools",
          "deliberation-tools",
          "capacity-planning-tools",
        ],
      },
      {
        id: "check-ins",
        name: "Check-ins",
        tools: [
          "deliberation-tools",
          "living-documentation-tools",
          "capacity-planning-tools",
          "group-facilitation-methods",
        ],
      },
      {
        id: "non-violent-communication",
        name: "Non-violent communication",
        tools: ["deliberation-tools", "group-facilitation-methods"],
      },
      {
        id: "open-working",
        name: "Open working",
        tools: [
          "living-documentation-tools",
          "deliberation-tools",
          "capacity-planning-tools",
        ],
      },
      {
        id: "revisable-rules",
        name: "Revisability",
        tools: [
          "living-documentation-tools",
          "deliberation-tools",
          "capacity-planning-tools",
          "governance-codes",
        ],
      },
      {
        id: "contributive-accounting",
        name: "Contributive accounting",
        tools: ["contribution-tracking-tools", "deliberation-tools"],
      },
      {
        id: "open-recognition",
        name: "Open recognition",
        tools: [
          "capacity-planning-tools",
          "contribution-tracking-tools",
          "peer-recognition-tools",
          "living-documentation-tools",
          "deliberation-tools",
        ],
      },
      {
        id: "participatory-budgeting",
        name: "Participatory budgeting",
        tools: [
          "participatory-budgeting-tools",
          "deliberation-tools",
          "living-documentation-tools",
        ],
      },
    ],
    tools: [
      { id: "group-facilitation-methods", name: "Group facilitation methods" },
      { id: "governance-codes", name: "Governance codes" },
      { id: "deliberation-tools", name: "Deliberation tools" },
      { id: "digital-voting-tools", name: "Digital voting tools" },
      { id: "living-documentation-tools", name: "Living documentation tools" },
      {
        id: "participatory-budgeting-tools",
        name: "Participatory budgeting tools",
      },
      { id: "capacity-planning-tools", name: "Capacity planning tools" },
      {
        id: "contribution-tracking-tools",
        name: "Contribution tracking tools",
      },
      { id: "project-management-tools", name: "Project management tools" },
      { id: "peer-recognition-tools", name: "Peer recognition tools" },
    ],
  };

  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<{
    type: "model" | "practice" | "tool";
    id: string;
  } | null>(null);

  // Compute the ids related to an active item across every column, following
  // the connections transitively (model -> practices -> tools and back). Used
  // to dim unrelated items in place. Returns null when nothing is active, in
  // which case every item is shown at full strength.
  const getRelatedSets = (
    active: { type: "model" | "practice" | "tool"; id: string } | null
  ) => {
    if (!active) return null;

    const models = new Set<string>();
    const practices = new Set<string>();
    const tools = new Set<string>();

    if (active.type === "model") {
      const model = relationships.models.find((m) => m.id === active.id);
      if (model) {
        models.add(model.id);
        model.practices.forEach((practiceId) => {
          practices.add(practiceId);
          relationships.practices
            .find((p) => p.id === practiceId)
            ?.tools.forEach((toolId) => tools.add(toolId));
        });
      }
    } else if (active.type === "practice") {
      const practice = relationships.practices.find((p) => p.id === active.id);
      if (practice) {
        practices.add(practice.id);
        practice.tools.forEach((toolId) => tools.add(toolId));
        relationships.models
          .filter((m) => m.practices.includes(practice.id))
          .forEach((m) => models.add(m.id));
      }
    } else {
      tools.add(active.id);
      relationships.practices
        .filter((p) => p.tools.includes(active.id))
        .forEach((practice) => {
          practices.add(practice.id);
          relationships.models
            .filter((m) => m.practices.includes(practice.id))
            .forEach((m) => models.add(m.id));
        });
    }

    return { models, practices, tools };
  };

  // Handle click on model
  const handleModelClick = (modelId: string) => {
    // Clear other selections when selecting a model
    setSelectedPractice(null);
    setSelectedTool(null);

    if (selectedModel === modelId) {
      setSelectedModel(null);
    } else {
      setSelectedModel(modelId);
    }
  };

  // Handle click on practice
  const handlePracticeClick = (practiceId: string) => {
    // Clear incompatible selections
    setSelectedModel(null);
    setSelectedTool(null);

    if (selectedPractice === practiceId) {
      setSelectedPractice(null);
    } else {
      setSelectedPractice(practiceId);
    }
  };

  // Handle click on tool
  const handleToolClick = (toolId: string) => {
    // Clear incompatible selections
    setSelectedModel(null);
    setSelectedPractice(null);

    if (selectedTool === toolId) {
      setSelectedTool(null);
    } else {
      setSelectedTool(toolId);
    }
  };

  // WordPress site that hosts the detailed pages this map links out to.
  const SITE_ORIGIN = "https://democratic-tech.co.uk";

  // Navigate to an item's detailed page. When embedded in the WordPress site we
  // post a scoped message to the parent frame (which handles routing); when the
  // map is opened standalone (e.g. the GitHub Pages build) we open the real site
  // URL directly so navigation still works outside the iframe.
  const navigate = (type: "model" | "practice" | "tool", id: string) => {
    const path = `/${type}s/${id}`;
    const isEmbedded = window.parent !== window;

    if (isEmbedded) {
      window.parent.postMessage({ type: "navigation", path }, SITE_ORIGIN);
    } else {
      window.open(`${SITE_ORIGIN}${path}`, "_blank", "noopener,noreferrer");
    }
  };

  // A single "active" item drives connection highlighting. Hovering an item
  // previews its connections (desktop pointers); selecting one locks them in so
  // they persist after the pointer leaves, and so the model works on touch and
  // keyboard where hover is unavailable.
  const selectedItem = selectedModel
    ? { type: "model" as const, id: selectedModel }
    : selectedPractice
      ? { type: "practice" as const, id: selectedPractice }
      : selectedTool
        ? { type: "tool" as const, id: selectedTool }
        : null;

  const activeItem = hoveredItem ?? selectedItem;
  const related = getRelatedSets(activeItem);

  const columns = {
    model: relationships.models,
    practice: relationships.practices,
    tool: relationships.tools,
  } as const;

  const activeName = selectedItem
    ? columns[selectedItem.type].find((entry) => entry.id === selectedItem.id)
        ?.name
    : null;

  // Render one column of items. All items stay rendered (no reflow); items that
  // are not connected to the active item are dimmed in place.
  const renderColumn = (
    type: "model" | "practice" | "tool",
    headingId: string,
    items: readonly { id: string; name: string }[],
    selectedId: string | null,
    onSelect: (id: string) => void
  ) => {
    const relatedSet = related
      ? type === "model"
        ? related.models
        : type === "practice"
          ? related.practices
          : related.tools
      : null;

    return (
      <ul aria-labelledby={headingId} className="list-none m-0 p-0">
        {items.map((item) => {
          const isSelected = selectedId === item.id;
          const isHovered =
            hoveredItem?.type === type && hoveredItem.id === item.id;
          const dimmed = relatedSet ? !relatedSet.has(item.id) : false;
          const background = isSelected
            ? colors.button.selected
            : isHovered
              ? colors.button.hover
              : colors.button.default;

          return (
            <li
              key={item.id}
              className="mb-2 transition-opacity duration-300"
              style={{ opacity: dimmed ? 0.35 : 1 }}
            >
              <div className="flex items-stretch gap-1">
                <button
                  type="button"
                  aria-pressed={isSelected}
                  className="flex-1 text-left p-3 rounded cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                  style={{
                    backgroundColor: background,
                    color: colors.text.buttons,
                  }}
                  onClick={() => onSelect(item.id)}
                  onMouseEnter={() => setHoveredItem({ type, id: item.id })}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.name}
                </button>
                {(isSelected || isHovered) && (
                  <button
                    type="button"
                    className="shrink-0 px-3 rounded cursor-pointer text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                    style={{
                      backgroundColor: colors.highlight,
                      color: colors.text.buttons,
                    }}
                    onClick={() => navigate(type, item.id)}
                    onMouseEnter={() => setHoveredItem({ type, id: item.id })}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span aria-hidden="true">Open ↗</span>
                    <span className="sr-only">Open {item.name} page</span>
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      className="w-full p-6 rounded-lg"
      style={{ backgroundColor: colors.primary, color: colors.text.primary }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Column 1: Democratic governance models */}
        <div className="flex-1">
          <h3
            id="col-models"
            className="text-xl font-bold mb-4 text-center"
          >
            Democratic governance models
          </h3>
          <div
            className="p-2 rounded"
            style={{ backgroundColor: colors.secondary }}
          >
            {renderColumn(
              "model",
              "col-models",
              relationships.models,
              selectedModel,
              handleModelClick
            )}
          </div>
        </div>

        {/* Column 2: Democratic practices */}
        <div className="flex-1">
          <h3
            id="col-practices"
            className="text-xl font-bold mb-4 text-center"
          >
            Democratic practices
          </h3>
          <div
            className="p-2 rounded"
            style={{ backgroundColor: colors.secondary }}
          >
            {renderColumn(
              "practice",
              "col-practices",
              relationships.practices,
              selectedPractice,
              handlePracticeClick
            )}
          </div>
        </div>

        {/* Column 3: Democratic tools */}
        <div className="flex-1">
          <h3 id="col-tools" className="text-xl font-bold mb-4 text-center">
            Democratic tools
          </h3>
          <div
            className="p-2 rounded"
            style={{ backgroundColor: colors.secondary }}
          >
            {renderColumn(
              "tool",
              "col-tools",
              relationships.tools,
              selectedTool,
              handleToolClick
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm" aria-live="polite">
        <p>
          {selectedItem
            ? `Showing connections for “${activeName}”. Select it again to clear, or choose “Open ↗” to visit its detailed page.`
            : "Hover an item to preview its connections, or select one to keep them highlighted. Then choose “Open ↗” to visit its detailed page."}
        </p>
      </div>
    </div>
  );
};

export default OrganizationalMapping;
