import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, TrendingUp, Heart, Lightbulb } from "lucide-react";
import { useSentimentAnalysis } from "@/hooks/useSentimentAnalysis";
import EmotionChart from "@/components/EmotionChart";
import SentimentChart from "@/components/SentimentChart";

const Index = () => {
  const [text, setText] = useState('');
  const { result, isLoading, analyze } = useSentimentAnalysis();

  const handleAnalyze = () => {
    analyze(text);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return 'bg-green-500';
      case 'Negative': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Brain className="h-10 w-10 text-indigo-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Sentiment & Emotion Analyzer
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the emotional tone and sentiment of your text using advanced AI analysis
          </p>
        </div>

        {/* Input Section */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Text Analysis
              </div>
            </CardTitle>
            <CardDescription>
              Enter your text below to analyze its sentiment and emotional content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[120px] text-base"
              maxLength={5000}
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {text.length}/5000 characters
              </span>
              <Button
                onClick={handleAnalyze}
                disabled={isLoading || !text.trim()}
                className="px-8"
              >
                {isLoading ? 'Analyzing...' : 'Analyze Text'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <Separator />

            {/* Overall Sentiment */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Sentiment Analysis Results
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge className={`${getSentimentColor(result.sentiment)} text-white px-4 py-2 text-lg`}>
                    {result.sentiment}
                  </Badge>
                  <span className="text-gray-700 text-lg">{result.explanation}</span>
                </div>

                {/* Sentiment Scores */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">
                      {(result.score.pos * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">Positive</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg border">
                    <div className="text-2xl font-bold text-red-600">
                      {(result.score.neg * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">Negative</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">
                      {(result.score.neu * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">Neutral</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600">
                      {result.score.compound.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">Compound</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <EmotionChart data={result.chart_data} />
                </CardContent>
              </Card>
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <SentimentChart data={result.pie_data} />
                </CardContent>
              </Card>
            </div>

            {/* Detected Emotions */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Detected Emotions</CardTitle>
                <CardDescription>
                  Emotions found in your text based on keyword analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(result.emotions).map(([emotion, count]) => (
                    <Badge key={emotion} variant="outline" className="px-3 py-1">
                      {emotion.charAt(0).toUpperCase() + emotion.slice(1)}: {String(count)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Tip */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    AI Tip
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {result.tip}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
