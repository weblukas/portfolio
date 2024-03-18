let colors = [
    "--sky-500",
    "--pink-500",
    "--green-500",
    "--yellow-500",
    "--red-500",
    "--purple-500",
    "--blue-500",
    "--indigo-500",
    "--violet-500",
];
export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};
