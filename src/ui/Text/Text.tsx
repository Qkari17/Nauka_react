type Props = {
  // label: string;
  children: React.ReactNode;
};

export const Text = ({ children }: Props) => {
  return <p className="dark:text-slate-300">{children}</p>;
};
