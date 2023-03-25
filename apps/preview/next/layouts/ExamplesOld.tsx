import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const ExampleLayout = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const { data: components } = useSWR<string[]>('/api/getExamplesOld', fetcher);

  return <div className="e-page-examples">
    <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
      <button
        className={`sidebar-toggle ${isOpen && 'sidebar-toggle-collapsed'}`}
        onClick={() => setIsOpen(!isOpen)}>&lt;&lt;</button>
      <h2 className="sidebar-heading">Components</h2>
      <ul className="sidebar-list">
        {components?.map(component => {
          return <li className={router.pathname === `/examples/${component}` ? "active" : ""} key={component}>
            <Link href={`/examplesOld/${component}`}>{component}</Link>
          </li>
        })}
      </ul>
    </div>
    {children}
  </div>
};
