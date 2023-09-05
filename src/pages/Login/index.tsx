import { Container } from '@/layouts';
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/ui';

// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

export function Login() {
	return (
		<Container className="bg-neon-blue">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Boas-vindas de volta!</CardTitle>
					<CardDescription>
						Estamos muito animados em te ver novamente!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								{/*
									<Label htmlFor="name">Name</Label>
									<Input id="name" placeholder="Name of your project" />
								*/}
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Deploy</Button>
				</CardFooter>
			</Card>
		</Container>
	);
}
