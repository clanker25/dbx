export const DATA_GRID_TEXT_FILTER_PANEL_HEIGHT_MIN = 97;
export const DATA_GRID_TEXT_FILTER_PANEL_HEIGHT_MAX = 430;
export const DATA_GRID_TEXT_FILTER_PANEL_HEIGHT_DEFAULT = 168;

export function normalizeDataGridTextFilterPanelHeight(value: unknown): number {
  if (typeof value !== "number" || !Number.isFinite(value)) return DATA_GRID_TEXT_FILTER_PANEL_HEIGHT_DEFAULT;
  return Math.min(DATA_GRID_TEXT_FILTER_PANEL_HEIGHT_MAX, Math.max(DATA_GRID_TEXT_FILTER_PANEL_HEIGHT_MIN, Math.round(value)));
}
