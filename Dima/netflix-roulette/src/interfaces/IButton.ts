export default interface IButton {
  buttonContent: string;
  // should be boolean DONE!!!!!!!!!!!!!!!!!
  isActive: boolean;
  buttonHandler?: () => void;
};