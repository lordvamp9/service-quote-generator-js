document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 1;
    const totalSteps = 3;
    let basePrice = 0;
    let addonsTotal = 0;

    const steps = {
        1: document.getElementById('step1'),
        2: document.getElementById('step2'),
        3: document.getElementById('step3')
    };

    // Stepper Elements
    const stepIndicators = {
        1: document.getElementById('stepIndicator1'),
        2: document.getElementById('stepIndicator2'),
        3: document.getElementById('stepIndicator3')
    };

    const btnBack = document.getElementById('btnBack');
    const btnNext = document.getElementById('btnNext');
    const btnSubmit = document.getElementById('btnSubmit');
    const validationMessage = document.getElementById('validationMessage');

    const serviceOptions = document.querySelectorAll('.service-option input[name="serviceTier"]');
    const addonCheckboxes = document.querySelectorAll('.add-on input[name="addons"]');
    const finalQuoteDisplay = document.getElementById('finalQuoteDisplay');
    const summaryList = document.getElementById('summaryList');

    function updateProgress() {
        // Update Stepper UI
        for (let i = 1; i <= totalSteps; i++) {
            const indicator = stepIndicators[i];
            indicator.classList.remove('active', 'completed');

            if (i < currentStep) {
                indicator.classList.add('completed');
                indicator.querySelector('.step-counter').innerHTML = '<i class="fas fa-check"></i>';
            } else if (i === currentStep) {
                indicator.classList.add('active');
                indicator.querySelector('.step-counter').textContent = i;
            } else {
                indicator.querySelector('.step-counter').textContent = i;
            }
        }

        btnBack.style.display = (currentStep > 1 && currentStep < totalSteps) ? 'block' : 'none';
        btnNext.style.display = (currentStep < totalSteps) ? 'block' : 'none';
        btnSubmit.style.display = (currentStep === totalSteps) ? 'block' : 'none';

        if (currentStep === totalSteps) {
            btnBack.style.display = 'block';
        }
    }

    function calculateQuote() {
        basePrice = 0;
        addonsTotal = 0;
        let summaryHtml = '';

        const selectedTier = document.querySelector('input[name="serviceTier"]:checked');
        if (selectedTier) {
            const price = parseFloat(selectedTier.closest('.service-option').getAttribute('data-price'));
            basePrice = price;

            const tierLabel = selectedTier.closest('.service-option').querySelector('strong').textContent;
            summaryHtml += `<li class="list-group-item d-flex justify-content-between align-items-center">
                                ${tierLabel}
                                <span class="badge bg-primary rounded-pill">$${basePrice.toLocaleString()} USD</span>
                            </li>`;
        }

        addonCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const cost = parseFloat(checkbox.closest('.add-on').getAttribute('data-cost'));
                addonsTotal += cost;

                const addonLabel = checkbox.closest('.add-on').querySelector('strong').textContent;
                summaryHtml += `<li class="list-group-item d-flex justify-content-between align-items-center">
                                    ${addonLabel}
                                    <span class="badge bg-secondary rounded-pill">$${cost.toLocaleString()} USD</span>
                                </li>`;
            }
        });

        const finalTotal = basePrice + addonsTotal;
        finalQuoteDisplay.textContent = `$${finalTotal.toLocaleString()} USD`;
        summaryList.innerHTML = summaryHtml;
    }

    function validateStep(step) {
        validationMessage.style.display = 'none';

        if (step === 1) {
            const isSelected = document.querySelector('input[name="serviceTier"]:checked');
            if (!isSelected) {
                validationMessage.textContent = "Please select one service tier to proceed.";
                validationMessage.style.display = 'block';
                return false;
            }
        }
        return true;
    }

    btnNext.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            steps[currentStep].style.display = 'none';
            currentStep++;
            steps[currentStep].style.display = 'block';

            if (currentStep === totalSteps) {
                calculateQuote();
            }

            updateProgress();
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentStep > 1) {
            steps[currentStep].style.display = 'none';
            currentStep--;
            steps[currentStep].style.display = 'block';
            updateProgress();
        }
    });

    serviceOptions.forEach(input => input.addEventListener('change', calculateQuote));
    addonCheckboxes.forEach(input => input.addEventListener('change', calculateQuote));

    document.getElementById('quoteForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('contactEmail');

        if (emailInput.value.trim() === '' || !emailInput.checkValidity()) {
            emailInput.classList.add('is-invalid');
            return;
        }

        emailInput.classList.remove('is-invalid');
        const finalQuote = finalQuoteDisplay.textContent;
        alert(`Quote sent successfully! An email with your quote (${finalQuote}) has been sent to ${emailInput.value}.`);

        document.getElementById('quoteForm').reset();
        currentStep = 1;
        steps[3].style.display = 'none';
        steps[1].style.display = 'block';
        updateProgress();
    });

    updateProgress();
});