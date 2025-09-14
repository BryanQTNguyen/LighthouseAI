import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function QuestionnaireStep({ question, value, onChange }) {
  const renderInput = () => {
    switch (question.type) {
      case "select":
        return (
          <Select
            value={value[question.id] || ""}
            onValueChange={(val) => onChange(question.id, val)}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-100">
              <SelectValue placeholder="Select an option..." />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {question.options.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="text-slate-100 hover:bg-slate-600"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "text":
        return (
          <Input
            type="text"
            placeholder={question.placeholder}
            value={value[question.id] || ""}
            onChange={(e) => onChange(question.id, e.target.value)}
            className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400"
          />
        );

      case "textarea":
        return (
          <Textarea
            placeholder={question.placeholder}
            value={value[question.id] || ""}
            onChange={(e) => onChange(question.id, e.target.value)}
            className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 min-h-[120px]"
          />
        );

      case "constraints":
        return (
          <div className="space-y-6">
            {question.fields.map((field) => (
              <div key={field.id}>
                <Label className="text-slate-200 text-base mb-3 block">
                  {field.label}
                </Label>
                <Select
                  value={value.constraints[field.id] || ""}
                  onValueChange={(val) => onChange(`constraints.${field.id}`, val)}
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-100">
                    <SelectValue placeholder="Select an option..." />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    {field.options.map((option) => (
                      <SelectItem 
                        key={option.value} 
                        value={option.value}
                        className="text-slate-100 hover:bg-slate-600"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 lighthouse-text-glow mb-6">
        {question.title}
      </h2>
      <div className="space-y-4">
        {renderInput()}
      </div>
    </div>
  );
}