"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const formSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.email("Email inválido"),
    message: z.string().min(1, "Mensagem é obrigatória"),
});

export function ContactForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        
        console.log(data);
    };

    return (
    <section className="py-10 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">
            Entre em Contato
            </h2>
            <p className="text-base mb-8 text-primary-foreground/90 max-w-md mx-auto">
            Nossa equipe de engenheiros, tecnólogos e técnicos altamente capacitados 
            está pronta para atender sua empresa.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mensagem</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" 
                    className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                        Enviar
                    </Button>
                </form>
            </Form>
        </div>
    </section>
    )
}