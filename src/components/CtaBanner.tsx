import QuoteButtons from "./QuoteButtons";

export default function CtaBanner() {
    return (
        <section className="bg-one text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Ready for your free estimate?</h2>
                    <p className="text-lg text-white/85">
                        Tell us what you need and we&apos;ll get back to you with a free quote.
                    </p>
                </div>
                <QuoteButtons />
            </div>
        </section>
    );
}
