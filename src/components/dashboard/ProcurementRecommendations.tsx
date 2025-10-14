import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, TrendingDown, Target, CheckCircle2, Download } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Optimal Purchase Window - Week 27",
    priority: "high",
    expectedSavings: "$45,000",
    volume: "3,500 MT",
    timing: "June 25 - July 2",
    confidence: "94%",
    reason: "Forecasted price dip combined with high supplier availability",
  },
  {
    id: 2,
    title: "Lock in Rate for Q3",
    priority: "medium",
    expectedSavings: "$32,000",
    volume: "5,000 MT",
    timing: "Before June 30",
    confidence: "88%",
    reason: "Price increase anticipated in Q3 due to seasonal demand",
  },
  {
    id: 3,
    title: "Diversify Supplier Mix",
    priority: "medium",
    expectedSavings: "$18,000",
    volume: "2,000 MT",
    timing: "Ongoing",
    confidence: "82%",
    reason: "Risk mitigation and potential cost savings from Supplier C",
  },
];

const upcomingWindows = [
  { date: "June 25-27", opportunity: "Price Dip", savings: "High", action: "Buy 3,500 MT" },
  { date: "July 15-18", opportunity: "Supplier Promotion", savings: "Medium", action: "Buy 2,000 MT" },
  { date: "Aug 5-10", opportunity: "Market Correction", savings: "High", action: "Buy 4,000 MT" },
];

const ProcurementRecommendations = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-accent/30 bg-accent/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">$95,000</div>
            <p className="text-xs text-muted-foreground">From current recommendations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Optimal Purchase Volume</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,500 MT</div>
            <p className="text-xs text-muted-foreground">Recommended for next 8 weeks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Action Window</CardTitle>
            <Calendar className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 Days</div>
            <p className="text-xs text-muted-foreground">Until optimal purchase window</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>AI-Powered Purchase Recommendations</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{rec.title}</h3>
                    <Badge 
                      variant={rec.priority === "high" ? "destructive" : "secondary"}
                      className={rec.priority === "high" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {rec.priority === "high" ? "High Priority" : "Medium Priority"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.reason}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-xs text-muted-foreground">Expected Savings</p>
                  <p className="text-sm font-bold text-success">{rec.expectedSavings}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Volume</p>
                  <p className="text-sm font-bold">{rec.volume}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Timing</p>
                  <p className="text-sm font-bold">{rec.timing}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Confidence</p>
                  <p className="text-sm font-bold">{rec.confidence}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Execute Recommendation
                </Button>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Windows */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Purchase Windows</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingWindows.map((window, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{window.date}</p>
                    <p className="text-xs text-muted-foreground">{window.opportunity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{window.action}</p>
                    <p className={`text-xs ${
                      window.savings === "High" ? "text-success" : "text-warning"
                    }`}>
                      {window.savings} Savings Potential
                    </p>
                  </div>
                  <Button size="sm" variant="outline">Set Alert</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProcurementRecommendations;
