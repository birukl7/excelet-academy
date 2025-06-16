import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">📜 Terms of Use</h1>
          <p className="text-gray-600">Last Updated: May 2025</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Excelet Academy! These Terms of Use (&quot;Terms&quot;) govern your access to and use of our mobile app,
              website, and services (collectively, the &quot;Service&quot;). By accessing or using our Service, you agree to these
              Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of Service</h2>
            <p className="text-gray-700 mb-6">
              You agree to use the Service lawfully and in accordance with these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Accounts</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>You are responsible for keeping your account credentials secure.</li>
              <li>You agree to provide accurate, complete, and updated information when registering.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                All content, materials, and features on Excelet Academy are the property of Excelet Academy or its
                licensors.
              </li>
              <li>You may not copy, modify, distribute, or publicly display content without written permission.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payments and Subscriptions</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Some services require payment. You agree to pay all applicable fees.</li>
              <li>
                Carefully review and confirm the course or exam before purchasing. We do not offer corrections, refunds,
                or changes once a payment is approved.
              </li>
              <li>Make sure to pay the correct amount for the specific course(s) or exam(s) you are buying.</li>
              <li>
                If you do not send valid proof of payment on the same day of payment, your request may be rejected.
              </li>
              <li>
                Submitting fake receipts or failing to send receipts may result in permanent account suspension without
                warning or recovery.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Subscription Access</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Access to content is granted only during your active subscription period.</li>
              <li>Once a subscription expires, access is removed unless renewed.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Termination</h2>
            <p className="text-gray-700 mb-6">
              We may suspend or permanently terminate your account for violations of these Terms, including fraudulent
              activity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The Service is provided &quot;as is&quot; without warranties of any kind, either express or implied.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              These Terms may be updated periodically. Continued use of the Service means you accept the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              For questions or concerns, please contact us at:{" "}
              <a href="https://t.me/excelcontact" className="text-purple-600 hover:underline">
                https://t.me/excelcontact
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
