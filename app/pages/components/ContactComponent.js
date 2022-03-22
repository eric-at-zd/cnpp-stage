export default function Contact() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Fill out our outreach form below to get connected to your local CNPP
            Business Counselor for no-cost assitance. Subscribe to get news
            updates and announcements on workshops, services, and small business
            grants available in your region.
          </p>
        </div>
        <div className="mt-12 h-auto overflow-hidden">
          <div className="flex items-center justify-center">
            <iframe
              width="700px"
              height="2500px"
              scrolling="no"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=jDHxBYNnJkO3Kb9TenYduO6S9GMlXKtEqpLV8A8ujnNUOEI2VzU3VEpTOVpYOUZWUDA0RjgzN0k1SC4u&embed=true"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              style={{
                border: 'none',
                width: '100%',
                minHeight: '80vh',
              }}
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              msallowfullscreen="true"
            >
              {' '}
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
