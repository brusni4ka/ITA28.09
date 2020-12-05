export default interface IButton {
  buttonContent: string;
  isActive: boolean;
  buttonHandler?: () => void;
};