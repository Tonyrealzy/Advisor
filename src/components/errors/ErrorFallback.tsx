"use client";

import { AlertCircle, Bug, Home, RefreshCw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";

export default function ErrorFallback({
  error,
  resetErrorBoundary: reset,
}: {
  error: unknown;
  resetErrorBoundary: () => void;
}) {
  const { navigateToHomeWithCondition: handleGoHome } = useNavigateInApp();

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        {/* Main Error Card */}
        <Card className="border-red-200">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">
              Oops! Something went wrong
            </CardTitle>
            <CardDescription className="text-base">
              We encountered an unexpected error. Don't worry, our team has been
              notified and we're working on fixing it.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error instanceof Error && (
              <Alert variant="destructive">
                <Bug className="h-4 w-4" />
                <AlertDescription className="ml-2">
                  <strong>Error:</strong>{" "}
                  {(error as Error)?.message || "An unknown error occurred"}
                </AlertDescription>
              </Alert>
            )}

            {/* User-friendly suggestions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-2">What you can do:</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
                <li>Try refreshing the page</li>
                <li>Clear your browser cache and cookies</li>
                <li>Return to the home page and try again</li>
                <li>If the problem persists, please contact support</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => window.location.reload()}
              size="lg"
              className="w-full sm:w-auto"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>
            <Button
              onClick={reset}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Button>
          </CardFooter>
        </Card>

        {/* Additional Help */}
        <Card className="bg-white/50 backdrop-blur">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact our support team at{" "}
              <a
                href="mailto:support@advisor.com"
                className="text-blue-600 hover:underline"
              >
                support@advisor.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
