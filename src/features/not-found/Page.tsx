"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  const { navigateToHomeWithCondition } = useNavigateInApp();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <Card>
          <CardHeader className="text-center">
            <div className="text-8xl mb-4">🔍</div>
            <CardTitle className="text-4xl mb-2">404</CardTitle>
            <CardDescription className="text-lg">
              Page Not Found
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved, deleted, or the URL might be incorrect.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-left">
              <h3 className="font-semibold mb-2">Here's what you can do:</h3>
              <ul className="space-y-1 list-disc list-inside text-gray-700">
                <li>Check the URL for typos</li>
                <li>Go back to the previous page</li>
                <li>Return to the home page</li>
                <li>Use the navigation menu to find what you need</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button onClick={navigateToHomeWithCondition} size="lg">
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
