import React from 'react';

const HumanRightsPolicy: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto pl-0 lg:pl-8">
                <h1 className="text-5xl md:text-7xl font-light mb-8 tacking-tight">Human Rights Policy</h1>
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                    <p>
                        Advance Intelligence in Motion (Advanced Intelligence in Motion) respects and promotes human rights globally. Our commitment is rooted in our foundational mission to provide transformative software to the world's most critical institutions while actively ensuring those tools are not utilized unlawfully or coercively.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Our Commitment</h2>
                    <p>
                        Our policies align with the United Nations Guiding Principles on Business and Human Rights. We evaluate all potential partnerships and client deployments through the strict lens of international human rights laws and standards.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Evaluation and Constraints</h2>
                    <p>
                        Unlike platform-agnostic technology providers, Advanced Intelligence in Motion actively evaluates the fundamental operating motives of our clients. We do not provide our software structures to organizations or regimes whose primary objectives conflict with western democratic values, or who systematically engage in human rights abuses.
                    </p>
                    <p>
                        If we discover through our rigorous internal audit frameworks that our software platforms (such as Archam or Forge) are being utilized for human rights abuses, contrary to our terms of service and democratic principles, we maintain both the technical ability and the organizational mandate to terminate the deployment.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Engineering for Accountability</h2>
                    <p>
                        We build immutable accountability directly into our platforms. By creating software architectures that cryptographically record analytical operations, we enforce a framework where our users must legally justify their actions, thus structurally inhibiting arbitrary discrimination, unlawful surveillance, or human rights violations by bad actors.
                    </p>

                    <p className="mt-12 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HumanRightsPolicy;
