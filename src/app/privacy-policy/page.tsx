import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: May 2025</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              At Excelet Academy, your privacy is important to us. This Privacy Policy explains how we collect, use, and
              protect your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              <strong>Personal Information:</strong> Your name, email address.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Usage Data:</strong> The courses and exam packages you purchase and use during your subscription
              period.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>To provide and improve our services.</li>
              <li>To manage your account and subscriptions.</li>
              <li>To communicate important updates and service changes.</li>
              <li>To ensure platform security and prevent fraud.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Sharing Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>We do not sell, share, or disclose your personal or usage data to any third parties.</li>
              <li>Your course access and purchase history are kept confidential.</li>
              <li>We only disclose data if required by law or regulation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We use secure servers and industry-standard encryption to protect your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>You may access, update, or correct your personal information at any time.</li>
              <li>You can opt out of promotional communications.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our app is not intended for children under the age of 13 without parental consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Subscription Usage</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Users have access to purchased content only during their active subscription period.</li>
              <li>After expiration, access is removed unless the user renews the subscription.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Policy Updates</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy. Continued use of the app means you agree to the latest version.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions, please contact us at:{" "}
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
