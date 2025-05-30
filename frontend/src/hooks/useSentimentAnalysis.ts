import { useState } from 'react';
import { analyzeSentimentAndEmotion } from '@/utils/sentimentAnalyzer';
import { useToast } from './use-toast';

export function useSentimentAnalysis() {
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const analyze = async (text: string) => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const analysisResult = await analyzeSentimentAndEmotion(text);
      setResult(analysisResult);
      console.log('Analysis result:', analysisResult);
      return analysisResult;
    } catch (error) {
      console.error('Analysis failed:', error);
      toast({
        title: "Analysis Failed",
        description: "Could not analyze the text. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
  };

  return {
    result,
    isLoading,
    analyze,
    reset,
  };
}
