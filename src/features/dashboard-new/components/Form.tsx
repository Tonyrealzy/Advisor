import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputField, NumberInputField } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  currencyOptions,
  investmentPurposeOptions,
  knowledgeLevelOptions,
  locationOptions,
  riskToleranceOptions,
} from "./form-data";
import { Button } from "@/components/ui/button";
import { useNavigateInApp } from "@/hooks/useNavigateInApp";

const InquiryForm = () => {
  const { navigateToDashboard } = useNavigateInApp();

  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Investment Profile</CardTitle>
          <CardDescription>
            Tell us about yourself and your investment goals
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Age */}
          <div className="space-y-2">
            <InputField
              id="age"
              label="Age"
              placeholder="Enter your age"
              required
            />
            <p className="text-sm text-gray-500">
              Your age helps us determine the appropriate investment horizon
            </p>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">
              Location <span className="text-red-500">*</span>
            </Label>
            <Select
            //   value={formData.location}
            >
              <SelectTrigger id="location">
                <SelectValue placeholder="Select your location" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((loc) => (
                  <SelectItem key={loc.value} value={loc.value}>
                    {loc.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Investment Knowledge */}
          <div className="space-y-2">
            <Label htmlFor="investmentKnowledge">
              Investment Knowledge <span className="text-red-500">*</span>
            </Label>
            <Select
            //   value={formData.investmentKnowledge}
            >
              <SelectTrigger id="investmentKnowledge">
                <SelectValue placeholder="Select your knowledge level" />
              </SelectTrigger>
              <SelectContent>
                {knowledgeLevelOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Investment Purpose */}
          <div className="space-y-2">
            <Label htmlFor="investmentPurpose">
              Investment Purpose<span className="text-red-500">*</span>
            </Label>
            <Select
            //   value={formData.investmentPurpose}
            >
              <SelectTrigger id="investmentPurpose">
                <SelectValue placeholder="Select your investment purpose" />
              </SelectTrigger>
              <SelectContent>
                {investmentPurposeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Investment Horizon */}
          <NumberInputField
            id="investmentHorizon"
            label="Investment Horizon"
            placeholder="Enter your investment horizon (in years)"
            required
          />

          {/* Risk Tolerance */}
          <div className="space-y-2">
            <Label htmlFor="riskTolerance">
              Risk Tolerance<span className="text-red-500">*</span>
            </Label>
            <Select
            //   value={formData.riskTolerance}
            >
              <SelectTrigger id="riskTolerance">
                <SelectValue placeholder="Select your risk tolerance" />
              </SelectTrigger>
              <SelectContent>
                {riskToleranceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">
              How comfortable are you with potential investment losses?
            </p>
          </div>

          {/* Currency */}
          <div className="space-y-2">
            <Label htmlFor="currency">
              Currency<span className="text-red-500">*</span>
            </Label>
            <Select
            //   value={formData.currency}
            >
              <SelectTrigger id="currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <NumberInputField
              id="amount"
              label="Investment Amount"
              placeholder="Enter your investment amount"
              required
            />
            <p className="text-sm text-gray-500">
              How much do you plan to invest?
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              Submit Inquiry
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-28 md:w-32"
              onClick={navigateToDashboard}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default InquiryForm;
