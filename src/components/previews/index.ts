import ButtonsPreview from './ButtonsPreview';
import OverlayPreview from './OverlayPreview';
import FormPreview from './FormsPreview';
import NavigationPreview from './NavigationPreview';
import TogglePreview from './TogglePreview';

export const previewComponents: Record<string, React.ComponentType> = {
    buttons: ButtonsPreview,
    overlays: OverlayPreview,
    forms: FormPreview,
    navigation: NavigationPreview,
    toggle: TogglePreview,
  };
