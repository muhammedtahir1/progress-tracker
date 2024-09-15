"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  target1: z.string().min(2, {
    message: "Goal must be of at least 2 characters.",
  }).max(50, {
    message: "Goal must not exceed 50 characters"
  }),
  target2: z.string().min(2, {
    message: "Goal must be of at least 2 characters.",
  }).max(50, {
    message: "Goal must not exceed 50 characters"
  }),
  target3: z.string().min(2, {
    message: "Goal must be of at least 2 characters.",
  }).max(50, {
    message: "Goal must not exceed 50 characters"
  }),
})

export function WeekForm() {
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      target1: "",
      target2: "",
      target3: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem  className="space-y-0">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="target1"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Enter your Target</FormLabel>
              <FormControl>
                <Input placeholder="hit it" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="target2"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Enter your Target2</FormLabel>
              <FormControl>
                <Input placeholder="hit it" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="target3"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Enter your Target3</FormLabel>
              <FormControl>
                <Input placeholder="hit it" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
