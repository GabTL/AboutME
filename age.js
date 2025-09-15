const birthYear = 2011;
                const birthMonth = 7; // Juillet (mois 7)
                const birthDay = 18;

                const today = new Date();
                let age = today.getFullYear() - birthYear;

                const isBirthdayPassed =
                    today.getMonth() + 1 > birthMonth ||
                    (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);

                if (!isBirthdayPassed) {
                    age--;
                }

                document.getElementById('age').textContent = age;