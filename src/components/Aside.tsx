import { FC } from "react";
import { v4 as uuid } from "uuid";
import { slugify } from "../../utils/slug";
import Link from "next/link";

type Link = {
	id: string;
	title: string;
	href: string;
};

type Block = {
	title: string;
	id: string;
	links: Array<Link>;
};

type Links = Array<Block>;

const links: Links = [
	{
		title: "Глава 1",
		id: uuid(),
		links: [
			{
				id: uuid(),
				title: "Основы Java Script",
				href: "/" + slugify("Основы Java Script"),
			},
			{
				id: uuid(),
				title: "Переменные java script",
				href: "/" + slugify("Переменные java script"),
			},
			{
				id: uuid(),
				title: "Типы в Java Script",
				href: "/" + slugify("Типы в Java Script"),
			},
		],
	},
];

const Aside: FC = () => {
	return (
		<aside>
			<nav>
				{links.map((block) => {
					return (
						<div key={block.id}>
							<h5>{block.title}</h5>
							{block.links.map((link) => {
								return (
									<Link key={link.id} href={`/lessons/${link.href}`}>
										{link.title}
									</Link>
								);
							})}
						</div>
					);
				})}
			</nav>
		</aside>
	);
};

export default Aside;
