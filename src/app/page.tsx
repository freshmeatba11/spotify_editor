"use client";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Home as HomeIcon } from "lucide-react";

export default function Home() {
  const { toast } = useToast();
  return (
    <div>
      <Button variant="outline" size="icon">
        <HomeIcon />
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        click
      </Button>
      <Toaster />
    </div>
  );
}
