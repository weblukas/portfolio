type IconProps = {
    "data-checked": string;
    width: string;
    height: string;
    isSelected: boolean;
    className: string;
};

type CheckboxIconProps = ReactNode | ((props: IconProps) => ReactNode);

type Inputs = {
    example: string;
    exampleRequired: string;
};