import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant:
    | 'btn_dark_green'
    | 'btn_green'
    | 'btn_white_text'
    | 'btn_white'
    | 'btn_dark_green_outline';
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full border min-h-[62px] ${variant} ${
        full && 'w-full'
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="text-[16px] font-[700] whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
