import { useState } from 'react'
import { ChatInterface } from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, MessageCircle } from "lucide-react";

export const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex h-screen">
			{/* Sidebar for larger screens */}
			<aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-5">
				<h2 className="text-lg font-bold mb-4">Convo Companion</h2>
				<nav>
					<ul>
						<li className="mb-2 flex items-center gap-2">
							<MessageCircle size={18} /> Chats
						</li>
					</ul>
				</nav>
			</aside>

			{/* Mobile Sidebar using ShadCN Sheet */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						className="md:hidden absolute top-4 left-4"
						onClick={() => setIsOpen(true)}
					>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-64">
					<h2 className="text-lg font-bold mb-4">Sidebar</h2>
					<nav>
						<ul>
							<li className="mb-2 flex items-center gap-2">
								<Home size={18} /> Chat
							</li>
						</ul>
					</nav>
				</SheetContent>
			</Sheet>

			{/* Main Content */}
			<main className="flex-1 p-5">
				<ChatInterface />
			</main>
		</div>
	);
}
