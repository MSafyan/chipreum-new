import Link from "next/link";
import { FC } from "react";

type SocialItem = [React.ComponentType<any>, string];

interface Props {
  items: SocialItem[];
}

const Social: FC<Props> = ({ items }) => {
  return (
    <ul className="flex items-center gap-2 mt-2">
      {items?.map(([Item, url], i) => (
        <li
          key={i}
          className="flex items-center justify-center w-[30px] h-[30px]"
        >
          <Link href={url}>
            <Item className="text-base text-[var(--color-gray-4)] dark:text-white" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
