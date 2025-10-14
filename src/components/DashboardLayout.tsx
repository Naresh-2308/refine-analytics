import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Overview from "./dashboard/Overview";
import PriceForecast from "./dashboard/PriceForecast";
import SupplyForecast from "./dashboard/SupplyForecast";
import ProcurementRecommendations from "./dashboard/ProcurementRecommendations";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Central Sugars Refinery</h1>
              <p className="text-sm text-muted-foreground">Predictive Analytics Platform</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="price">Price Forecast</TabsTrigger>
            <TabsTrigger value="supply">Supply Forecast</TabsTrigger>
            <TabsTrigger value="procurement">Procurement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Overview />
          </TabsContent>

          <TabsContent value="price" className="space-y-6">
            <PriceForecast />
          </TabsContent>

          <TabsContent value="supply" className="space-y-6">
            <SupplyForecast />
          </TabsContent>

          <TabsContent value="procurement" className="space-y-6">
            <ProcurementRecommendations />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardLayout;
