import React, { useState } from "react";

const OrganizationalMapping = () => {
  // Define the custom colors as reusable style variables
  const colors = {
    primary: "#ededed",
    secondary: "#F5F7FA",
    text: {
      primary: "#333333", // Main text color
      secondary: "#2C3E50", // Secondary text color
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

  // Define the mapping relationships with fixed case-sensitivity
  const relationships = {
    models: [
      {
        id: "traditional-cooperative",
        name: "Traditional cooperative governance model",
        practices: [
          "equal-voting",
          "delegated-deliberation",
          "deliberative-decision-making",
        ],
      },
      {
        id: "public-commons",
        name: "Public-commons partnerships (PCPs)",
        practices: ["weighted-voting", "distributed-leadership"],
      },
      {
        id: "sociocracy",
        name: "Sociocracy",
        practices: [
          "consent-based-decision-making",
          "distributed-leadership",
          "open-working",
          "participatory-budgeting",
        ],
      },
      {
        id: "open-cooperativism",
        name: "Open cooperativism",
        practices: [
          "open-working",
          "open-recognition",
          "lazy-consensus",
          "consent-based-decision-making",
          "delegated-deliberation",
          "deliberative-decision-making",
          "participatory-budgeting",
          "distributed-leadership",
          "contributive-accounting",
        ],
      },
      {
        id: "daos",
        name: "Decentralized Autonomous Organizations (DAOs)",
        practices: [
          "reputation-based-voting",
          "weighted-voting",
          "quadratic-voting",
          "participatory-budgeting",
          "distributed-leadership",
          "open-recognition",
        ],
      },
      {
        id: "discos",
        name: "Distributed Cooperative Organizations (DisCOs)",
        practices: [
          "contributive-accounting",
          "open-working",
          "open-recognition",
          "participatory-budgeting",
        ],
      },
      {
        id: "liquid-democracy",
        name: "Liquid democracy",
        practices: [
          "weighted-voting",
          "quadratic-voting",
          "reputation-based-voting",
          "delegated-deliberation",
          "distributed-leadership",
          "open-recognition",
          "open-working",
          "participatory-budgeting",
        ],
      },
    ],
    practices: [
      {
        id: "equal-voting",
        name: "Equal voting",
        tools: ["general-assembly", "digital-voting-tools"],
      },
      {
        id: "delegated-deliberation",
        name: "Delegated deliberation",
        tools: ["deliberation-tools", "board-of-directors", "governance-codes"],
      },
      {
        id: "consensus-decision-making",
        name: "Consensus decision-making",
        tools: [
          "deliberation-tools",
          "digital-voting-tools",
          "group-facilitation-methods",
        ],
      },
      {
        id: "deliberative-decision-making",
        name: "Deliberative decision-making",
        tools: [
          "deliberation-tools",
          "living-documentation-tools",
          "group-facilitation-methods",
          "board-of-directors",
          "digital-voting-tools",
        ],
      },
      {
        id: "lazy-consensus",
        name: "Lazy consensus",
        tools: [
          "deliberation-tools",
          "living-documentation-tools",
          "digital-voting-tools",
        ],
      },
      {
        id: "consent-based-decision-making",
        name: "Consent-based decision-making",
        tools: [
          "deliberation-tools",
          "digital-voting-tools",
          "group-facilitation-methods",
          "living-documentation-tools",
        ],
      },
      {
        id: "distributed-leadership",
        name: "Distributed leadership",
        tools: [
          "living-documentation-tools",
          "capacity-planning-tools",
          "deliberation-tools",
          "participatory-budgeting-tools",
        ],
      },
      {
        id: "contributive-accounting",
        name: "Contributive accounting",
        tools: ["contribution-tracking-tools", "capacity-planning-tools"],
      },
      {
        id: "open-recognition",
        name: "Open recognition",
        tools: ["contribution-tracking-tools"],
      },
      {
        id: "open-working",
        name: "Open working",
        tools: ["living-documentation-tools"],
      },
      {
        id: "participatory-budgeting",
        name: "Participatory budgeting",
        tools: ["participatory-budgeting-tools"],
      },
      {
        id: "reputation-based-voting",
        name: "Reputation-based voting",
        tools: ["digital-voting-tools", "contribution-tracking-tools"],
      },
      {
        id: "quadratic-voting",
        name: "Quadratic voting",
        tools: ["digital-voting-tools"],
      },
      {
        id: "weighted-voting",
        name: "Weighted voting",
        tools: ["digital-voting-tools"],
      },
    ],
    tools: [
      { id: "general-assembly", name: "General Assembly" },
      { id: "group-facilitation-methods", name: "Group facilitation methods" },
      { id: "board-of-directors", name: "Board of Directors" },
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
    ],
  };

  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<{
    type: "model" | "practice" | "tool";
    id: string;
  } | null>(null);

  // Get filtered models based on selection
  const getFilteredModels = () => {
    if (selectedPractice) {
      // Get models that use the selected practice
      return relationships.models.filter((model) =>
        model.practices.includes(selectedPractice)
      );
    } else if (selectedTool) {
      // Get models that are linked to practices that use the selected tool
      const practicesWithTool = relationships.practices
        .filter((practice) => practice.tools.includes(selectedTool))
        .map((practice) => practice.id);

      return relationships.models.filter((model) =>
        model.practices.some((practiceId) =>
          practicesWithTool.includes(practiceId)
        )
      );
    }

    return relationships.models;
  };

  // Get filtered practices based on selection
  const getFilteredPractices = () => {
    if (selectedModel) {
      // Get practices used by the selected model
      const model = relationships.models.find((m) => m.id === selectedModel);
      if (!model) return relationships.practices;

      return relationships.practices.filter((practice) =>
        model.practices.includes(practice.id)
      );
    } else if (selectedTool) {
      // Get practices that use the selected tool
      return relationships.practices.filter((practice) =>
        practice.tools.includes(selectedTool)
      );
    }

    return relationships.practices;
  };

  // Get filtered tools based on selection
  const getFilteredTools = () => {
    if (selectedPractice) {
      // Get tools used by the selected practice
      const practice = relationships.practices.find(
        (p) => p.id === selectedPractice
      );
      if (!practice) return relationships.tools;

      return relationships.tools.filter((tool) =>
        practice.tools.includes(tool.id)
      );
    } else if (selectedModel) {
      // Get tools used by practices related to the selected model
      const model = relationships.models.find((m) => m.id === selectedModel);
      if (!model) return relationships.tools;

      // Get all tool IDs from practices related to the selected model
      const toolIds = model.practices.flatMap((practiceId) => {
        const practice = relationships.practices.find(
          (p) => p.id === practiceId
        );
        return practice ? practice.tools : [];
      });

      // Filter out duplicate tool IDs
      const uniqueToolIds = [...new Set(toolIds)];

      return relationships.tools.filter((tool) =>
        uniqueToolIds.includes(tool.id)
      );
    }

    return relationships.tools;
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

  // Handle double click for navigation (iframe-compatible)
  const handleDoubleClick = (
    type: "model" | "practice" | "tool",
    id: string
  ) => {
    // Create URL paths that match your WordPress site structure
    let path;

    switch (type) {
      case "model":
        path = `/models/${id}`;
        break;
      case "practice":
        path = `/practices/${id}`;
        break;
      case "tool":
        path = `/tools/${id}`;
        break;
      default:
        return;
    }

    // Send a message to the parent window (WordPress)
    try {
      // First approach: Try to communicate with parent frame
      window.parent.postMessage(
        {
          type: "navigation",
          path: path,
        },
        "*"
      );

      // Fallback approach: Open in new tab if iframe communication fails
      console.log(`Navigation requested to: ${path}`);
    } catch (error) {
      console.error("Could not communicate with parent frame", error);
    }
  };

  // Filtered data for rendering - maintain original order
  const filteredModels = getFilteredModels();
  const filteredPractices = getFilteredPractices();
  const filteredTools = getFilteredTools();

  // References for scroll containers
  const modelsContainerRef = React.useRef<HTMLDivElement>(null);
  const practicesContainerRef = React.useRef<HTMLDivElement>(null);
  const toolsContainerRef = React.useRef<HTMLDivElement>(null);

  // Scroll to selected items when they change
  React.useEffect(() => {
    if (selectedModel && modelsContainerRef.current) {
      const selectedElement = modelsContainerRef.current.querySelector(
        `[data-id="${selectedModel}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedModel]);

  React.useEffect(() => {
    if (selectedPractice && practicesContainerRef.current) {
      const selectedElement = practicesContainerRef.current.querySelector(
        `[data-id="${selectedPractice}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedPractice]);

  React.useEffect(() => {
    if (selectedTool && toolsContainerRef.current) {
      const selectedElement = toolsContainerRef.current.querySelector(
        `[data-id="${selectedTool}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedTool]);

  // CSS custom properties for inline styles
  const buttonDefaultStyle = {
    backgroundColor: colors.button.default,
    color: colors.text.buttons,
  };
  const buttonSelectedStyle = {
    backgroundColor: colors.button.selected,
    color: colors.text.selectedButtons,
  };

  return (
    <div
      className="w-full p-6 rounded-lg"
      style={{ backgroundColor: colors.primary, color: colors.text.primary }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Column 1: Organizational Models */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-center">
            Democratic governance models
          </h3>
          <div style={{ backgroundColor: colors.secondary }}>
            {filteredModels.map((model) => (
              <div
                key={model.id}
                data-id={model.id}
                className={`p-3 mb-2 rounded cursor-pointer transition-all duration-300 relative`}
                style={{
                  ...(selectedModel === model.id
                    ? buttonSelectedStyle
                    : buttonDefaultStyle),
                  ...(hoveredItem &&
                  hoveredItem.type === "practice" &&
                  relationships.models.find((m) =>
                    m.practices.includes(hoveredItem.id)
                  )?.id === model.id
                    ? { borderLeft: `4px solid ${colors.highlight}` }
                    : {}),
                }}
                onMouseOver={(e) => {
                  if (selectedModel !== model.id) {
                    e.currentTarget.style.backgroundColor = colors.button.hover;
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedModel !== model.id) {
                    e.currentTarget.style.backgroundColor =
                      colors.button.default;
                  }
                }}
                onClick={() => handleModelClick(model.id)}
                onDoubleClick={() => handleDoubleClick("model", model.id)}
                onMouseEnter={() =>
                  setHoveredItem({ type: "model", id: model.id })
                }
                onMouseLeave={() => setHoveredItem(null)}
              >
                {model.name}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Practices */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-center">
            Democratic practices
          </h3>
          <div style={{ backgroundColor: colors.secondary }}>
            {filteredPractices.map((practice) => (
              <div
                key={practice.id}
                data-id={practice.id}
                className={`p-3 mb-2 rounded cursor-pointer transition-all duration-300`}
                style={{
                  ...(selectedPractice === practice.id
                    ? buttonSelectedStyle
                    : buttonDefaultStyle),
                  ...(hoveredItem &&
                  ((hoveredItem.type === "model" &&
                    relationships.models
                      .find((m) => m.id === hoveredItem.id)
                      ?.practices.includes(practice.id)) ||
                    (hoveredItem.type === "tool" &&
                      practice.tools.includes(hoveredItem.id)))
                    ? { borderLeft: `4px solid ${colors.highlight}` }
                    : {}),
                }}
                onMouseOver={(e) => {
                  if (selectedPractice !== practice.id) {
                    e.currentTarget.style.backgroundColor = colors.button.hover;
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedPractice !== practice.id) {
                    e.currentTarget.style.backgroundColor =
                      colors.button.default;
                  }
                }}
                onClick={() => handlePracticeClick(practice.id)}
                onDoubleClick={() => handleDoubleClick("practice", practice.id)}
                onMouseEnter={() =>
                  setHoveredItem({ type: "practice", id: practice.id })
                }
                onMouseLeave={() => setHoveredItem(null)}
              >
                {practice.name}
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Tool Types */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-center">
            Democratic tools
          </h3>
          <div style={{ backgroundColor: colors.secondary }}>
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                data-id={tool.id}
                className={`p-3 mb-2 rounded cursor-pointer transition-all duration-300`}
                style={{
                  ...(selectedTool === tool.id
                    ? buttonSelectedStyle
                    : buttonDefaultStyle),
                  ...(hoveredItem &&
                  hoveredItem.type === "practice" &&
                  relationships.practices
                    .find((p) => p.id === hoveredItem.id)
                    ?.tools.includes(tool.id)
                    ? { borderLeft: `4px solid ${colors.highlight}` }
                    : {}),
                }}
                onMouseOver={(e) => {
                  if (selectedTool !== tool.id) {
                    e.currentTarget.style.backgroundColor = colors.button.hover;
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedTool !== tool.id) {
                    e.currentTarget.style.backgroundColor =
                      colors.button.default;
                  }
                }}
                onClick={() => handleToolClick(tool.id)}
                onDoubleClick={() => handleDoubleClick("tool", tool.id)}
                onMouseEnter={() =>
                  setHoveredItem({ type: "tool", id: tool.id })
                }
                onMouseLeave={() => setHoveredItem(null)}
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        <p>
          {selectedModel || selectedPractice || selectedTool
            ? "Showing filtered relationships. Click selected items to clear filters."
            : "Click on any item to see related elements. Double-click to visit the detailed page."}
        </p>
      </div>
    </div>
  );
};

export default OrganizationalMapping;
